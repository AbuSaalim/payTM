const mongoose = require('mongoose');
require("dotenv").config();



mongoose.connect(process.env.mongoUrl);

const signUpSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:String
    }
});

const User = mongoose.model("User" , signUpSchema);

module.exports = {
    User
}