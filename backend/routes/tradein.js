const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {requireSignin,isAuth,isAdmin} = require('../controllers/auth');
// to create a new tradein car
const {create, tradeinById ,read, remove} = require('../controllers/tradein');
// import from the controller for customer where the logic is handled for sign-up/out process
const {customerById} = require('../controllers/customer');

// a page to find the trade in car using id
router.get('/tradein/:tradeinId', read);

//upload a vehicle and image  to db using customer id 
// customer can add in tradein vehicles
router.post('/tradein/create/:customerId',requireSignin,isAuth,create);
//delete a car using vehicleId and need adminId(customer with role=1)
router.delete('/tradein/:tradeinId/:customerId',requireSignin,isAuth,isAdmin,remove);

// take the id-param from routes and execute customerById and vehicleById 
router.param('customerId',customerById)
router.param('tradeinId',tradeinById)

module.exports = router