const express = require("express")
const { TokenCheck,isAdmin } = require("../middlewares/authJwttoken")
const { couponCheck,createCoupon } = require("../controllers/couponController")

router = express.Router()

router.get("/checkCoupon",TokenCheck,couponCheck)
router.post("/createCoupon",TokenCheck,isAdmin,createCoupon)

module.exports = router