const couponSchema = require("../models/couponModel")


const couponCheck = async(req,res,next) => {
    const coupon = req.body.couponcode
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
    const coupon = req.body.couponcode
    console.log(coupon)
    const addCoupon = await couponSchema.create(coupon)
    console.log(addCoupon)
    if (addCoupon){
        res.status(200).send("coupon added successfully")
    }
}

const deleteCoupon = async(req,res,next) => {
    const coupon = req.body.couponcode
    console.log(coupon)
    const addCoupon = await couponSchema.deleteOne({coupon:coupon})
    console.log(addCoupon)
    if (addCoupon){
        res.status(200).send("coupon deleted successfully")
    }
}



module.exports = {couponCheck,createCoupon,deleteCoupon}