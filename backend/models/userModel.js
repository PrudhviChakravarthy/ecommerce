const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt'); // Using bcrypt to hash the password

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    block :{
        type: Boolean,
        default: false
    },
    refreshToken : {
        type : String,
        default : "",
    },
    Usertype : {
        type: String,
        defualt : "user",
        required : true
    },
    cart :{
        type : Array,
        defualt : [],
    },
    address : [{type : mongoose.Schema.Types.ObjectId, ref: "Address"}],
    wishlist : [{type:  mongoose.Schema.Types.ObjectId, ref:"Product"}]
},{
    timestamps:true
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSaltSync(15);
    this.password = await bcrypt.hash(this.password, salt)
}  );

// This async function uses to match the password of the user inputed 
// and the password saved in the database
userSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compare(password, this.password)
}


//Export the model
module.exports = mongoose.model('User', userSchema);