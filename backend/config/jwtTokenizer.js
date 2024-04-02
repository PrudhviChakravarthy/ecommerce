const jwt = require("jsonwebtoken")
// const { options } = require("../routes/authRoutes")

Tokenizer = (id) =>{
    return jwt.sign({id}, process.env.JWT_TOKEN ,{expiresIn : "5d"} )
}


module.exports = {Tokenizer}