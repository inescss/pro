const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : false
    },
    lastName : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    age : {
        type : Number,
        required : false

    },
   
    phone : {
        type : Number,
        required : false
    },
    field : {
        type : String,
        required : false
    },
    password: {
        type: String,
        required: [false, "Please enter your password!"]
    },
    address :{
        type : String,
        required :false
    },
    category: {
        type: String,
        required: false,
        trim:false
    },
    name : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required :false
    },
    phone : {
        type : Number,
        required :false
    },
    field : {
        type : String,
        required : false
    },
    address :{
        type : String,
        required :false
    },
    image:{
        type:String,
        required:false,
        
    },
    category: {
        type: String,
        required: false,
        trim:false
    },
    userRole: {
        type: String,
        default: 'Employee',
        roles: ['Employee', 'Admin','Company'],
      },
   
});
module.exports = mongoose.model("User", userSchema);