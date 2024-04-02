const jwt = require("jsonwebtoken")
// const { options } = require("../routes/authRoutes")

CookieGen = (id) =>{
    return jwt.sign({id}, process.env.JWT_TOKEN ,{expiresIn : "3d"} )
}


module.exports =  { CookieGen }