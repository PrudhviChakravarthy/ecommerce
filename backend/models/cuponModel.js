const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var couponSchema = new mongoose.Schema({
    coupon:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    maxdiscount:{
        type:Number,
        required:true,
        unique:true,
    },
    categories:{
        type:Array ,
        default : [],
        required:true,
        unique:true,
    },
    minprice:{
        type:Number,
        required:true
    },
    maxprice:{
        type:Number,
        required:true
    }
});

//Export the model
module.exports = mongoose.model('Coupon', couponSchema);