const mangoose = require("mongoose")
const { db } = require("../models/userModel")
const connection_string = process.env.connection_string || "mongodb://127.0.0.1:27017"
console.log(connection_string)
const  dbConnect = async() =>{
    const conn = await mangoose.connect(connection_string)
    console.log("conncetion successful")
}
dbConnect()

module.exports = dbConnect;