const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var petSchema = new mongoose.Schema({
    petname:{
        type:String,
        required:true,
    },
    petcategory:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    imagelocation:{
        type:Array,
        required:true,
    },
});

module.exports = mongoose.model('Pets', petSchema);