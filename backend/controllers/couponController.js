const couponSchema = require("../models/cuponModel")


const couponCheck = async(req,res,next) => {
    const coupon = req.couponcode
    if (length(coupon) != 6){
        res.status(403).send("invalid coupon code")
    }else {
        const checkCoupon = await couponSchema.find({coupon:coupon})
        if(checkCoupon){
            return res.status(200).send("coupon matched")
        }else{
            return res.status(403).send("Coupon not found")
        }
    }
}

const createCoupon = async(req,res,next) => {
    const coupon = req.couponcode
    const addCoupon = await couponSchema.insertOne(coupon)
    if (addCoupon){
        res.status(200).send("coupon added successfully")
    }
}

module.exports = {couponCheck,createCoupon}