const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config()
// import routes
const customerRoutes = require('./routes/customer')


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
//mid-wares
app.use(morgan('dev'))
// to parse jason data
app.use(bodyParser.json())
//to use cookies to save customers info(password)
app.use(cookieParser())
// used to validate if user inputs for acct. creation..
app.use(expressValidator())
// routes middlewares
app.use('/api',customerRoutes)

  const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`server is runinng now on ${port}`)
})