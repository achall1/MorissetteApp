const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {requireSignin,isAuth,isAdmin} = require('../controllers/auth');

// import from the controller for customer where the logic is handled for sign-up/out process
const {customerById,update} = require('../controllers/customer');

router.get('/user/:customerId',requireSignin,isAuth,(req,res) =>{
            res.json({
                customer: req.profile
            })
})
// update should be here need editing 

//router.put('/secret/:customerId',requireSignin,(req,res) =>{
  //  res.json(this.post)
//})
// take the id-param from routes and execute user by id method
router.put('/update-account/:customerId', requireSignin, update);

router.param('customerId',customerById)

module.exports = router