const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const Cors = require("cors")
require('dotenv').config()
// import routes
const authRoutes = require('./routes/auth')
const customerRoutes = require('./routes/customer')
const vehicleRoutes = require('./routes/vehicle')


mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true,
     useCreateIndex: true
    }
  )
  .then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	next();
});

app.use(Cors());
//mid-wares
app.use(morgan('dev'))
// to parse jason data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
//to use cookies to save customers info(password)
app.use(cookieParser())
// used to validate if user inputs for acct. creation..
app.use(expressValidator())
// routes middlewares
app.use('/api',authRoutes)
app.use('/api',customerRoutes)
app.use('/api',vehicleRoutes)
  const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`server is runinng now on ${port}`)
})