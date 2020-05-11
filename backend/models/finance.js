const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const financeSchema = new mongoose.Schema(
    {
        occupation: {type: String,trim:true,required:false,maxlength:20},
        income:{type: Number,trim:true,required:false,maxlength:15},
        ssn:{type: Number,trim:true,required:false,unique:10},
        dob:{type: String,trim:true,required:false,maxlength:20},
        employersname: {type: String,trim:true,required:false,maxlength:20},
        credit:{type: String,trim:true,required:false,maxlength:20},
        status:{type: String,trim:true,required:false,maxlength:20},
        paymentAmount:{type: String,trim:true,required:false,maxlength:20},
        //need to impleiment
        interstRate:{type: String,trim:true,required:false,maxlength:20},
        customer: { type: ObjectId, ref: "Customer",required:false },
    },{timestamps:true}
);
//ssn encrypting can be done later if possible

module.exports  = mongoose.model("Finance",financeSchema);
