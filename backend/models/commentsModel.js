const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var commentsSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    productid:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
        default: 0,
    },
    dislikes:{
        type: Number,
        default: 0,
    },
    likedby : {
        type : Array
    },
    dislikedby : {
        type : Array
    }
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('commentSchema', commentsSchema);