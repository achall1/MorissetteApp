const Customer = require('../models/customer')
// used for generating web token for signing in
const jwt = require('jsonwebtoken');
//used for authorization checking
const expressJwt = require('express-jwt');
const {errorHandler} = require('../helpers/dbError')

// sign-up logic 
exports.signup = (req,res) => {
   // res.json({message:"from customer controller"});
    //res.json(req.body);
    ///console.log("req.body",req.body);
    const customer = new Customer(req.body);

    customer.save((err,customer)=>{
        if(err){return res.status(400).json({
            err: errorHandler(err)
        })}
        // hide password encryption from being displayed
        customer.salt = undefined;
        customer. crypted_password = undefined;
        res.json({customer});
    });
   

};

// signin logic 
exports.signin = (req,res) =>
{
    //find customer by email
    const {email,password} = req.body
    Customer.findOne({email},(err,customer) =>{
        if(err || !customer)
        {
            return res.status(400).json({
                error:'your email is not found:Re-try'
            })
        }
        if(!customer.authenticate(password))
        {
            return res.status(400).json({
                error:'your email and password is not found:Re-try'
            })
        }
        // match email and plain-passowrd by rencrypting it with the existing encrypted-password in DB
        // generate a signed token with userID and jwt-code
        const token = jwt.sign({_id: customer._id}, process.env.JWT_CODE)
        // PERSIST the token as 't' in cookie with expiry date
        res.cookie('t',token,{ expire:new Date() + 9999})
        // return responce with user and token to frontend
        const {_id,name,email,role} = customer
        return res.json({token, customer: {_id,email,name,role}})


    })
}

// signout method clears the cooke form res
exports.signout = (req, res) =>
{
    res.clearCookie('t');
    res.json({message: "you have signed-out "})
}