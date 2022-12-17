const mongoose = require('mongoose');

// schema for our database
const fromSchema = new mongoose.Schema({
     
    name: {
       type: String,
       required : true
    },
    phone: {
        type: Number,
        required : true
     },
     pincode: {
        type: Number,
        required : true
     },
     address: {
        type: String,
        required : true
     },
     landmark: {
        type: String,
        required : true
     },
     flat_number: {
        type: Number,
        required : true
     },
     floor_number: {
        type: Number,
        required : true
     },
     building_name: {
        type: String,
        required : true
     },
     city: {
        type: String,
        required : true
     },
     state: {
        type: String,
        required : true
     }

})

const User = mongoose.model('USER',fromSchema);

module.exports = User;