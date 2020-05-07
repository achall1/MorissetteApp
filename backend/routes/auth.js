const express = require('express')
const router = express.Router()
// import from the controller where the logic is handled for sign-up/out process
const {signup,signin,signout,requireSignin, updateAccount} = require('../controllers/auth');
const{userSignupValidator} = require('../validator')
// first validate the input  using(validator) then go to next step using(signup)
router.post("/signup",userSignupValidator, signup);
/*app.get('/about',(req,res) => {
    res.send("about page")
})*/
//signin route
router.post("/signin", signin);
//signout route
router.get("/signout", signout);

router.get('/about',requireSignin,(req,res) => {
    res.send("about page")
})
router.post('/update-account', updateAccount);

module.exports = router