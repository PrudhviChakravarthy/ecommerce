const express = require("express");
const { createUser,loginHandler, getUsers,getUser,deleteUser, updateUser,blockuser,getCookieToken,logoutHandler } = require("../controllers/userController");
const { TokenCheck, isAdmin } = require("../middlewares/authJwttoken");

const router = express.Router()



router.post("/register",createUser)
router.post("/login",loginHandler)
router.get("/getusers",getUsers)
router.get("/getcookie",getCookieToken)
router.post("/getuser",TokenCheck,isAdmin,getUser)
router.post("/deleteuser",deleteUser)
router.post("/updateuser",updateUser)
router.post("/block",TokenCheck,isAdmin,blockuser)
router.post("/logout",logoutHandler)

module.exports = router;