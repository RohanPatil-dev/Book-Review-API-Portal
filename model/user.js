const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    // image :{
    //    type : String,
    //    required : true
    // }
});


const userModel = mongoose.model('user', UserSchema );

module.exports = userModel