const formidable = require('formidable') 
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('../helpers/dbError')
const Vehicle = require('../models/vehicle')

exports.vehicleById =(req,res,next,id) =>
{
    Vehicle.findById(id).exec((err, vehicle) =>{
        if(err || !vehicle)
        {
            return res.status(400).json({
                error: 'vehicle is not found'
            })
        }
        // poulate the vehicle from the db using id
        req.vehicle = vehicle
        next()
    })
}

// read vehicle and return
exports.read = (req, res) =>
{
    // set image undefined because its to large to send to client directly
    req.vehicle.image = undefined
    return res.json(req.vehicle)
}

// delete a vehicle using adminiD and vehicle id
exports.remove = (req, res) =>
{
    let vehicle = req.vehicle

    vehicle.remove((err,deletedVehicle) =>{
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