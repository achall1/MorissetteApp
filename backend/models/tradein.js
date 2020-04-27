const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const tradeinSchema = new mongoose.Schema(
    {
        model : {type: String,trim:true,required:true,maxlength:12},
        make : {type: String,trim:true,required:true,maxlength:12},
        year: {type: String,trim:true,required:true,maxlength:15},
        bodytype:{type: String,trim:true,required:true,maxlength:15},
        vin:{type: String,trim:true,required:false,maxlength:17},
        mileage : {type: Number,trim:true,required:true,maxlength:12},
        askingprice : {type: Number,trim:true,required:true,maxlength:12},
        image:{data: Buffer, 
               contentType: String
              },
       customer: { type: ObjectId, ref: "Customer" },

    },{timestamps:true}
);


module.exports  = mongoose.model("Tradein",tradeinSchema);