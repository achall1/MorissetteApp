const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {requireSignin,isAuth,isAdmin} = require('../controllers/auth');
// to create a new car,search,read,get picture 

const {create, vehicleById ,read, remove, image, searchByPrice,searchbar} = require('../controllers/vehicle');

// import from the controller for customer where the logic is handled for sign-up/out process
const {customerById} = require('../controllers/customer');

// a page to find the car using id
router.get('/vehicle/:vehicleId', read);

//get vehicle picture using vehicle id
router.get("/vehicle/picture/:vehicleId", image);

//upload a vehicle and image  to db using admin id 
router.post('/vehicle/create/:customerId',requireSignin,isAuth,isAdmin,create);

//delete a car using vehicleId and adminId(customer with role=1)
router.delete('/vehicle/:vehicleId/:customerId',requireSignin,isAuth,isAdmin,remove);

// take the id-param from routes and execute customerById and vehicleById 
router.param('customerId',customerById)
router.param('vehicleId',vehicleById)

// get the vehicle using the a search bar or something in the frontend 
// it querys by make, model or year  
router.post("/vehicles/searchbar", searchbar);

// send the vehicles filterd by price  to the frontend 
router.post("/vehicles/searchprice", searchByPrice);



module.exports = router