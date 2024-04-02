const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const TokenCheck = async (req, res, next) => {
    const Auth = req.headers.authorization
    if (! Auth){
        // res.json({"message":"Token not avilable"})
        req.logedin = false
        next()

    } else if (Auth.startsWith("Bearer")){
        token = Auth.split(" ")[1];
        verify = jwt.decode(token,process.env.JWT_TOKEN)
        console.log(verify)
        if (verify){
        user = await User.findById(verify.id)
        console.log(user)
        req.logedin = true
        req.user = user;
        next();
        }else{
        return res.status(404).send("Token not specified properly")
        }
        // console.log(User.findById(verify.password))
    } else {
        return res.status(204).send("Invalid token please check")
    }
}

const isAdmin = async (req, res, next ) => {
    const user = req.user;
    console.log(user)

    if (user.Usertype !== "Admin"){
        console.log("you are not a admin")
        res.json({"message":"You are not an admin"})
    }else{
        next()
    }
}

module.exports = {TokenCheck, isAdmin}