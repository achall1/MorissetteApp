const formidable = require('formidable') 
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('../helpers/dbError')
const Vehicle = require('../models/vehicle')

//find vehicle  by id
exports.vehicleById =(req,res,next,id) =>
{
    Vehicle.findById(id).exec((err, vehicle) =>{
        if(err || !vehicle)
        {
            return res.status(400).json({
                error: 'vehicle is not found'
            })
        }
        // poulate the vehicle to the db using id
        req.vehicle = vehicle
        next()
    })
}

// find and return vehicle
exports.read = (req, res) =>
{
    // set image undefined because its to large to send to client directly
    req.vehicle.image = undefined
    return res.json(req.vehicle)
}


//retrun vehicle image  to frontend 
// example query http://localhost:8000/api/vehicle/picture/5e7408ced3ae6b3b0cb30730
exports.image = (req, res, next) => {
    if (req.vehicle.image.data) {
        res.set('Content-Type',req.vehicle.image.contentType);//"image/jpeg; charset=UTF-8" 
        return res.send(req.vehicle.image.data);
    }
    next();
};


// delete a vehicle using adminiD and vehicle id
exports.remove = (req, res) =>
{
    let vehicle = req.vehicle

    vehicle.remove((err) =>{
        if(err)
        {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
            res.json({message:"vehicle deleted"})
    })
   
}

// used to handle form data and image coming from client 
//create a vehicle and upload image 
exports.create = (req,res) =>
{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields,files)=>{

        if(err)
        {
            return res.status(400).json({
                error: 'IMage couldnt be uploaded'
            })
        }
// check for all the required fiels of vehilce and send error msg
const{make,model,mileage,price,vin,invintoryCount} = fields
if(!make || !model|| !mileage||  !price|| !vin|| !invintoryCount)
    {
        return res.status(400).json({
            error: 'all required attributes for vehicle are needed'
        }) 
    }
// get the data from the client or apia
        let vehicle = new Vehicle(fields)
// load the image 
        if(files.image){
// verify if image is too large
            if(files.image.size > 1000000)
            {
                return res.status(400).json({
                    error: 'file size is too large,has to be less than 1mb'
                })
            }
            vehicle.image.data = fs.readFileSync(files.image.path)
            vehicle.image.contentType = files.image.type

        }

        vehicle.save((err,result) =>{
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            //send the form data back to db
            res.json(result);
        })
    })
}





/**
    search vehicle using price range you get from the body 
 */
  
exports.searchByPrice = (req, res) => {
    
   // let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    //let skip = parseInt(req.body.skip);
    let findArgs = {};
    
 
   for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            }else {
                findArgs[key] = req.body.filters[key];
            }
        }
    } 
//find the vehicle in db using the price range 
    Vehicle.find(findArgs)
        .select("-image")
        .sort()
       // .skip(skip)
      //.limit(limit)
        .exec((err, vehicle) => {
            if (err) {
                return res.status(400).json({
                    error: "Vehicle is not found"
                });
            }
            res.json({
                size: vehicle.length,
                vehicle
            });
        });
};



// this method will search and return vehicle items found in the db
// the param for this query is either a vehicle model or make or year
// example  serching for model http://localhost:8000/api/vehicles/searchbar?model=civic
// example  serching for make http://localhost:8000/api/vehicles/searchbar?make=toytota
// example  serching for year http://localhost:8000/api/vehicles/searchbar?year=2020

exports.searchbar = (req, res) => {
    // create query object to hold search value and category value
     const query = {};
    // assign search value to query.name
     if (req.query.make) {
        query.make = { $regex: req.query.make, $options: 'i'};
     }
     else if(req.query.model)
     {
        query.model = { $regex: req.query.model, $options: 'i'};
     }
     else if(req.query.year)
     {
        query.year = { $regex: req.query.year, $options: 'i'};
     }

        Vehicle.find( query ) 
            .select('-image') // deselect the image since it takes time and space to query
            .exec((err, vehicle) => {
           
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err + "vehicle year,make or model has no Match")
                });
            }
            res.json({ vehicle,size:vehicle.length});
        })
};


/**
 * find all cars and return them by order using model/make/year or any other fiels
 * the query url is like below
 * http://localhost:8000/api/vehicles/findall
 */

exports.findallvehicles = (req, res) => {
    
   let order = req.query.order = 'asc';
    Vehicle.find(req.id)
        .select('-image') 
         .sort(order)
        .limit(100)
        .exec((err, vehicles) => {
            if (err) {
                return res.status(400).json({
                    error: 'The Vehicles are not found in the DB'
                });
            }
            res.json(vehicles);
        });
};




/* this function needs testing */
exports.decreaseQuantity = (req, res, next) => {
    let bulkOps = req.body.order.products.map(item => {
        return {
            updateOne: {
                filter: { _id: item._id },
                update: { $inc: { invintoryCount: -item.count } }
            }
        };
    });

    Product.bulkWrite(bulkOps, {}, (error, products) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update product'
            });
        }
        next();
    });
};