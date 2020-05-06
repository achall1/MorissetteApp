const Customer = require('../models/customer')
// used for generating web token for signing in
const jwt = require('jsonwebtoken');
//used for authorization checking to use a page
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
        res.cookie('t',token /*,{ expire:new Date() + 9999}*/)
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

// this method verify if the customer are signed in or not
//to use a the customer route, they need to have the token-generated at signin
exports.requireSignin = expressJwt({
    // use the token from .env file
    secret: process.env.JWT_CODE,
    userProperty: "auth"
})

//method for verfiying customers are authorize to access routes
// customers can only access there own profile
exports.isAuth = (req,res,next) =>
{
    let customer = req.profile && req.auth && req.profile._id == req.auth._id
    if(!customer)
    {
       return res.status(403).json({
            error: "access not allowed,your not an admin"
       })
    }
    next()
}
// check to see if the customer is an admin
exports.isAdmin =( req, res, next) =>{
    // check if the role 0 and send error
    if(req.profile.role === 0){
        return res.status(403).json({
            error: "access denied not an admin"
    })
   }
   next()
}

//This function will update the users account

exports.updateAccount = (req, res) => {
    const currEmail = req.body.currentEmail;

    Customer.findOne( {currEmail}, (err, customer) => {
        if(err || !customer){
            return res.status(400).json({
                error:"Error changing your information"
            });
        }
        const newFirstName = req.body.firstName != '' ? req.body.firstName : customer.firstName;
        const newLastName = req.body.lastName != '' ? req.body.lastName : customer.lastName;
        const newEmail = req.body.email != '' ? req.body.email : customer.email;
        const newDOB = req.body.DOB != '' ? req.body.DOB : customer.DOB;
        const newState = req.body.state != '' ? req.body.state : customer.state;
        const newZip = req.body.zip != '' ? req.body.zip : customer.zip;
        const newCreditCard = req.body.creditCard != '' ? req.body.creditCard : customer.creditCard;
        const newCVV = req.body.CVV != '' ? req.body.CVV : customer.CVV;
        const newExpirationDate = req.body.expirationDate != '' ? req.body.expirationDate: customer.expirationDate;
        const newAutoInsurer = req.body.autoInsurer != '' ? req.body.autoInsurer : customer.autoInsurer;
        const newSSN = req.body.SSN != '' ? req.body.SSN : customer.SSN;

        const newUserInformation = {
            "firstName": newFirstName,
            "lastName": newLastName,
            "email": newEmail,
            "password": Customer.password,
            "DOB": newDOB,
            "state": newState,
            "zip": newZip,
            "creditCard": newCreditCard,
            "CVV": newCVV,
            "expirationDate": newExpirationDate,
            "autoInsurer": newAutoInsurer,
            "Last4SSN": newSSN
        }; 
        const newCustomer = new Customer(newUserInformation);
        
        newCustomer.save((err,customer)=>{
            if(err){return res.status(400).json({
                err: errorHandler(err)
            })}
            // hide password encryption from being displayed
           
        });
    })
    res.status(200).send("Account updated")
}