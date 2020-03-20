const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const customerSchema = new mongoose.Schema(
    {
        name: {type: String,trim:true,required:true,maxlength:32},
        phoneNumber:{type: Number,trim:true,required:false,maxlength:11},
        email:{type: String,trim:true,required:true,unique:20},
        crypted_password:{type: String,required:true},
        salt:String,
        role:{
                type: Number,
                default: 0 // nonadmin=0 // admin=1 //tradein= 2
             },
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
