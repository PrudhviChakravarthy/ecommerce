const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
    {
        "productName": {
          "type": "string",
          "required": true,
          unique:true,
        },
        "productid":{
            "type":Number,
            required:true,
            unique:true
        },
        "discription":{
            type:String,
            required:true
        },
        "images": {
          "type": ["string"],
          "required": true
        },
        "price": {
          "type": "number",
          "required": true
        },
        "quantity": {
          "type": "number",
          "required": true
        },
        "oldPrice": {
          "type": "number",
          "required": true
        },
        "max_purchase_limit":{
          type: Number,
          required: true
        },
        "newPrice": {
          "type": "number",
          "required": true
        },
        "discount": {
          "type": "number",
          "required": true
        },
        "category":{
            "type":String,
            required: true
        },
        "tags":{
            "type":["String"]
        },
        "rating":{
            "type":Number,
            required:true
        }
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);