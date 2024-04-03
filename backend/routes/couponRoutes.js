const express = require("express")
const { TokenCheck,isAdmin } = require("../middlewares/authJwttoken")
const { couponCheck,createCoupon, deleteCoupon } = require("../controllers/couponController")

router = express.Router()

router.get("/checkCoupon",TokenCheck,couponCheck)
router.post("/createCoupon",TokenCheck,isAdmin,createCoupon)
router.delete("/delete",TokenCheck,isAdmin,deleteCoupon)

module.exports = router