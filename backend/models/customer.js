const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const customerSchema = new mongoose.Schema(
    {
        first_name: {type: String,trim:true,required:false,maxlength:32},
        last_name: {type: String,trim:true,required:false,maxlength:32},
        email: {type: String,trim:true,required:false,unique:20},
        crypted_password: {type: String,required:false},
        salt:String,
        role: {
                type: Number,
                default: 0 // nonadmin=0 // admin=1 //tradein= 2
             },
        StreetAddress:{type: String, trim:true, default:""},
        DOB:{type: String, trim:true, default:""},
        State: {type: String, trim:true, default:""},
        City: {type: String, trim:true, default:""},
        Zip: {type: Number, trim:true, default: 0, default:0},
        CreditCardNo: {type: Number, default: 0, default:0},
        CVV: {type: Number, default: 0, default:0},
        ExpirationDate: {type: String, trim:true, default:""},
        Auto_Insurer: {type: String, trim:true}, default:"",
        Last4SSN: {type: Number, default: 0, default:0},
        buyHistory:{type:Array,default:[] }
    },{timestamps:true}
);

//password encrypting on virtual field, we recive password from frontend side
customerSchema.virtual('password')
.set(function(password){ 
    this.tempPassword = password
    this.salt = uuidv1() // get a random string and hash tha password
    this.crypted_password = this.encryptPassword(password);

})
// return the encrypted password
.get(function(){
    return this.tempPassword
}) 
// encrypt password method
customerSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.crypted_password;
    },
    encryptPassword: function(password)
    {
        if(!password) return '';
        try{
            return crypto.createHmac('sha1',this.salt)
                        .update(password)
                        .digest('hex')
        }catch(err){ return ''; }
    }
}
module.exports  = mongoose.model("Customer",customerSchema);