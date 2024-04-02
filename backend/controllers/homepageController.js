// There was no model for homepage where we can use the user data to check and send the certain recommendations
// suited for the user based on his recent purchases

const productsModel = require("../models/productsModel")


const isLogin = async(req, res) => {

}

const homePage = async(req,res) => {
    if (req.logedin){
        return res.json({"message":"you are logedin"})
    }
    // const products = await productsModel.find({})
    res.json({"message":"You were at homepage"})
}


module.exports = {isLogin,homePage}