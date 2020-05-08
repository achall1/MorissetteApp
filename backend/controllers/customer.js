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
// this method add orders to customer(Role=0) buyHistoty Array
exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];

    req.body.order.products.forEach(item => {
        history.push({
            _id: item._id,
            model: item.model,
            make: item.make,
            year: item.year,
            mileage: item.milage,
            price: item.price,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.order.amount
        });
    });

    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update customers purchase history'
            });
        }
        next();
    });
};

exports.purchaseHistory = (req, res) => {
    Order.find({ customer: req.profile._id })
        .populate('customer', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};
exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
   // const { email, password } = req.body;
   //const {email,password} = req.body

   const newFirstName = req.body.firstName != '' ? req.body.firstName : customer.first_name;
   const newLastName = req.body.lastName != '' ? req.body.lastName : customer.last_name;
   const newEmail = req.body.email != '' ? req.body.email : customer.email;
   const newStreetAddress = req.body.StreetAddress != '' ? req.body.StreetAddress : customer.StreetAddress;
   const newDOB = req.body.DOB != '' ? req.body.DOB : customer.DOB;
   const newCity= req.body.City != '' ? req.body.City : customer.City;
   const newState = req.body.State != '' ? req.body.State : customer.State; 
   const newZip = req.body.Zip != '' ? req.body.Zip : customer.Zip;
   const newCreditCard = req.body.CreditCardNo != '' ? req.body.CreditCardNo : customer.CreditCardNo;
   const newCVV = req.body.CVV != '' ? req.body.CVV : customer.CVV;
   const newExpirationDate = req.body.ExpirationDate != '' ? req.body.ExpirationDate: customer.ExpirationDate;
   const newAutoInsurer = req.body.autoInsurer != '' ? req.body.autoInsurer : customer.Auto_Insurer;
   const newSSN = req.body.Last4SSN != '' ? req.body.Last4SSN : customer.Last4SSN;
   const newPassword = req.body.crypted_password != '' ? req.body.crypted_password : customer.crypted_password;

    Customer.findOne({ _id: req.profile._id }, (err, customer) => {
        if (err || !customer) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
/*      if (!email) {
            return res.status(400).json({
                error: 'Email is required'
            });
        } else {
            customer.email = email;
        }

        if (password) {
            if (password.length < 4) {
                return res.status(400).json({
                    error: 'Password must be at least 6 characters'
                });
            } else {
                customer.password = password;
            }
        }
        */
        
        const newUserInformation = {
            "firstName": newFirstName,
            "lastName": newLastName,
            "email": newEmail,
            "password":  newPassword  ,  
            "StreetAddress": newStreetAddress,           //Customer.crypted_password,
            "DOB": newDOB,
            "State": newState,
            "City": newCity,
            "Zip": newZip,
            "CreditCardNo": newCreditCard,
            "CVV": newCVV,
            "ExpirationDate": newExpirationDate,
            "autoInsurer": newAutoInsurer,
            "Last4SSN": newSSN
        }; 
        const newCustomer = new Customer(newUserInformation);

        newCustomer.save((err, newCustomer) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
           // newCustomer.crypted_password = undefined;
           // newCustomer.salt = undefined;
            res.json(newCustomer);
        });
    });
};