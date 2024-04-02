const { CookieGen } = require("../config/cookieGen");
const { Tokenizer } = require("../config/jwtTokenizer");
const User = require("../models/userModel")


const createUser = async(req,res) => {
    console.log(req.body);
    const email = req.body.email;
    const findUser = await User.findOne({email : email});
    if (!findUser){
        const newUser = User.create(req.body)
        res.json({"Status":`User Created ${req.body.firstname}`})
    }else{
        res.json({"Imp message": "user alredy existed please login "})
    }
}

const getCookieToken  = (req,res) => {
    const token = req.cookies;
    console.log(token)
}

const logoutHandler = async(req,res) => {
    email = req.body.email
    const remove_token = await User.updateOne({email:email},{$set:{refreshToken:""}})
    res.clearCookie("CookieToken","",{httpOnly:true})
    console.log(remove_token)
    if (remove_token.modifiedCount){
        res.json({"message":"logout successful"})
    }else {
        res.josn({"message":"logout unsuccessful"})
    }
}

const loginHandler = async(req, res) => {
    const {email,password}  = req.body;
    console.log(email,password)
    const findUser = await User.findOne({email : email});
    const passwordmatch = await findUser.isPasswordMatch(password)
    if (!findUser) {
        res.json({"message":"user not found check your email"})
    }else if (passwordmatch) {
        updateToken = await CookieGen(findUser?._id)
        const tokenupdate = await User.updateOne({email: req?.body?.email}, {$set : {refreshToken: updateToken}})
        res.cookie("CookieToken", updateToken, {httpOnly : true,maxAge : 3*24*60*60*1000} )
        res.json({"message":"login successful","token": updateToken})
    }else {
        res.json({"message":"password incorrect"})
    }
}

// lets write a fuction to get all the users in the database

const getUsers = async(req,res) =>{
    try{
        const users = await User.find({},{email : 1, firstname :1, _id : 1})
        res.json(users)
    } catch (error){
        throw new Error(error)
    }
}

// Lets create a function who takes the email and sends the user details

const getUser =  async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.find({email : req.body.email}, {firstname:1, lastname : 1})
        res.json(user)

    } catch (error){
        throw new Error(error)
    }
}

// Lets create a fucntion which removes the user from the database 

const deleteUser = async (req,res) => {
    try {
        const user = await User.deleteOne({email: req.body.email})
        console.log(user)
        if (! user.deletedCount){
        res.json({"message":"User not found."})
        } else {
            res.json({"message":"User deleted successfully"})
        }
    } catch (error) {
        throw new Error(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const user = await User.updateOne({email: req?.body?.email}, {$set : {firstname: req?.body?.firstname, lastname: req?.body?.lastname}})
        console.log(user)
        if (!user){
        res.json({"message":"User not updated."})
        } else {
            res.json({"message":"User updated successfully"})
        }
    } catch (error) {
        throw new Error(error)
    }
}

const blockuser = async (req,res) => {
    try{
        const user = await User.updateOne({email: req?.body?.email}, {$set : {block : true}})
        if (user){
            res.json({"message" : "User bloked"})
        }
    }catch (error){
        throw new Error("User not found error")
    }
}

module.exports = {createUser,  loginHandler, getUsers, getUser,deleteUser, updateUser,blockuser,getCookieToken,logoutHandler};