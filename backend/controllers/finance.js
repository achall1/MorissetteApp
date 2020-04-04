const formidable = require('formidable') 
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('../helpers/dbError')
const Finance = require('../models/finance')
const Customer = require('../models/customer')


//find the finance report by id and retrun as json
exports.financeById =(req,res,next,id) =>
{
    Finance.findById(id).populate('customer').exec((err, finance) =>{
        if(err || !finance)
        {
            return res.status(400).json({
                error: 'finance form is not found(financeID is not in param)'
            })
        }
        // poulate the finance report from the db using id
        req.finance = finance
        next()
    })
}
// return finance info
exports.read = (req, res) =>
{
    return res.json(req.finance)
}

// delete a finance form using adminiD and form id
exports.remove = (req, res) =>
{
    let finance = req.finance

    finance.remove((err) =>{
        if(err)
        {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
            res.json({message:"finance information deleted"})
    })
   
}

// used to handle form data and image coming from client 
//create a fiannce and upload image 
exports.create = (req,res) =>
{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err,fields)=>{
       
       
        // check for all the required fiels of vehilce and send error msg
        //has to have customer id included
        const{occupation,income,ssn,dob,employersname,credit,customer} = fields
        if(!occupation || !income|| !ssn||  !dob|| !employersname|| !credit ||!customer)
            {
                return res.status(400).json({
                    error: 'all required attributes for finance report are needed'
                }) 
            } 
    // get the data from the client or api
        let finance = new Finance(fields)

        finance.save((err,result) =>{
            if(err){
                console.log('Finance Report creation error ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            //send the form data back to db
            res.json(result);
        })
    })
}

//update the finacial info//status: approved or denied
exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
        

        let finance = req.finance;
        finance = _.extend(finance, fields);

     finance.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};