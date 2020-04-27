const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {requireSignin,isAuth,isAdmin} = require('../controllers/auth');
// to create a new car
const {create, vehicleById ,read, remove} = require('../controllers/vehicle');
// import from the controller for customer where the logic is handled for sign-up/out process
const {customerById} = require('../controllers/customer');

// a page to find the car using id
router.get('/vehicle/:vehicleId', read);

//upload a vehicle and image  to db using admin id 
router.post('/vehicle/create/:customerId',requireSignin,isAuth,isAdmin,create);
//delete a car using vehicleId and adminId(customer with role=1)
router.delete('/vehicle/:vehicleId/:customerId',requireSignin,isAuth,isAdmin,remove);

// take the id-param from routes and execute customerById and vehicleById 
router.param('customerId',customerById)
router.param('vehicleId',vehicleById)

module.exports = router