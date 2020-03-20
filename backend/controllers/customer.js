const Customer = require('../models/customer')

exports.customerById = (req,res,next,id) =>{
    Customer.findById(id).exec((err,customer)=>{
        // if customer is not found retrun error
        if(err || !customer){
            return res.status(400).json({
                error:"customer not found"
            })
        }
        // return customer info go to the next page
        req.profile = customer;
        next();
    })
}