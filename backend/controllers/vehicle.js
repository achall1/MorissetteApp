const formidable = require('formidable') 
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('../helpers/dbError')
const Vehicle = require('../models/vehicle')
//find vehicle by id
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
 * find all cars and return them byorder using model/make/year or any other fiels
 * the query string is like below
 * by model = /vehicles?sortBy=model&order=desc&limit=5
 * by make = /vehicles?sortBy=make&order=desc&limit=5
 * by year = /vehicles?sortBy=year&order=desc&limit=5
 * if there is no parma then all vehicles are returned
 */

exports.findCar = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) :100;

    Vehicle.find()
        .select('-image')
        .populate('makeofCar') 
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, vehicles) => {
            if (err) {
                return res.status(400).json({
                    error: 'The Vehicle is not found in the DB'
                });
            }
            res.json(vehicles);
        });
};




/**
 * list products by search, using price range 
 */
  
exports.searchCar = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
 
    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);
 
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
 
    Vehicle.find(findArgs)
        .select("-image")
        //.populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Vehicle is not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};




exports.searchbar = (req, res) => {
    // create query object to hold search value and category value
    const query = {};
    // assign search value to query.name
    //if (req.query) {
       // query.make = { $regex: req.query.make, $options: 'i'};
       // query.make = { $regex: req.query.search, $options: 'i' };
        // assigne category value to query.category
        /*if (req.query.category && req.query.category != 'All') {
            query.category = req.query.category;
        }*/
        // find the product based on query object with 2 properties
        // search and category

        Vehicle.find(req.make, (err, vehicle) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(vehicle);
        }).select('-photo');
    //}
};









exports.decreaseQuantity = (req, res, next) => {
    let bulkOps = req.body.order.products.map(item => {
        return {
            updateOne: {
                filter: { _id: item._id },
                update: { $inc: { quantity: -item.count, sold: +item.count } }
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
