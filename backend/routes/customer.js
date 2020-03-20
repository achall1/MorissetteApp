const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {requireSignin,isAuth,isAdmin} = require('../controllers/auth');

// import from the controller for customer where the logic is handled for sign-up/out process
const {customerById} = require('../controllers/customer');

router.get('/secret/:customerId',requireSignin,isAuth,isAdmin,(req,res) =>{
            res.json({
                customer: req.profile
            })
})

// take the id-param from routes and execute user by id method
router.param('customerId',customerById)

module.exports = router