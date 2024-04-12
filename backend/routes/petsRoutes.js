const express = require("express")
const { isAdmin,TokenCheck } = require("../middlewares/authJwttoken")
const { addpet,getpets } = require("../controllers/petController")

router = express.Router()

router.post("/addpet",TokenCheck,isAdmin,addpet)
router.get("/getpets",getpets)

module.exports = router
