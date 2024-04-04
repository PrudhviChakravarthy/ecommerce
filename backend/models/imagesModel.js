const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var imageModel = new mongoose.Schema({
    imagename:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    productid:{
        type:String,
        required:true,
        unique:true,
    },
});

//Export the model
module.exports = mongoose.model('images', imageModel);