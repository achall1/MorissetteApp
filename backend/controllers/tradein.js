const formidable = require('formidable') 
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('../helpers/dbError')
const TradeIn = require('../models/tradein')

//find trade-in vehicle by id
exports.tradeinById =(req,res,next,id) =>
{
    TradeIn.findById(id).exec((err, tradein) =>{
        if(err || !tradein)
        {
            return res.status(400).json({
                error: 'The Trade-in vehicle is not found'
            })
        }
        // poulate the trad-in vehicle to the db using id
        req.tradein = tradein
        next()
    })
}

// find and return tradein vehicle
exports.read = (req, res) =>
{
    // set image undefined because its to large to send to client directly
    req.tradein.image = undefined
    return res.json(req.tradein)
}

// delete a vehicle using adminiD and vehicle id
exports.remove = (req, res) =>
{
    let tradein = req.tradein

    tradein.remove((err) =>{
        if(err)
        {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
            res.json({message:"Trade in vehicle is deleted"})
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
                error: 'Trade-in car couldnt be uploaded'
            })
        }
// check for all the required fiels of vehilce and send error msg
const{make,model,year,mileage,bodytype,askingprice} = fields
if(!make || !model|| !mileage|| !year||  !askingprice||  !bodytype)
    {
        return res.status(400).json({
            error: 'all required attributes for tradein-vehicle are needed'
        }) 
    }
// get the data from the client or apia
        let tradein = new TradeIn(fields)
// load the image 
        if(files.image){
// verify if image is too large
            if(files.image.size > 1000000)
            {
                return res.status(400).json({
                    error: 'file size is too large,has to be less than 1mb'
                })
            }
            tradein.image.data = fs.readFileSync(files.image.path)
            tradein.image.contentType = files.image.type

        }

        tradein.save((err,result) =>{
            if(err){
                console.log(err)
                return res.status(400).json({
                    error: errorHandler(err)
                    
                })
            }
            //send the form data back to db
            res.json(result);
        })
    })
}