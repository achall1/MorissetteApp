const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema(
    {
        model : {type: String,trim:true,required:true,maxlength:12},
        make : {type: String,trim:true,required:true,maxlength:12},
        year: {type: String,trim:true,required:false,maxlength:15},
        bodytype:{type: String,trim:true,required:false,maxlength:15},
        color:{type: String,trim:true,required:false,maxlength:10},
        msrp : {type: Number,trim:true,required:false,maxlength:15},
        mileage : {type: Number,trim:true,required:true,maxlength:12},
        price : {type: Number,trim:true,required:true,maxlength:12},
        mpg : {type: String,trim:true,required:false,maxlength:10},
        vin:{type: String,trim:true,required:true,maxlength:17},
        invintoryCount:{type: Number,trim:true,required:true,maxlength:5},
        featuresandSpecs:{type: String,trim:true,required:false,maxlength:30},
        image:{data: Buffer, 
               contentType: String
              },
    },{timestamps:true}
);

//password encrypting on virtual field, we recive password from frontend side

module.exports  = mongoose.model("Vehicle",vehicleSchema);