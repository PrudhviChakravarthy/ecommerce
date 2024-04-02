const express = require("express")
const { TokenCheck, isAdmin } = require("../middlewares/authJwttoken");
const { newProduct ,
     getItems,
     delProduct,
     updateItem,
     purchaseItem,
     productLimitcheck
    } = require("../controllers/productController")

const router = express.Router()

// router.get("/allproducts", getProducts)
router.get("/getitems",TokenCheck, getItems)
router.post("/additem",TokenCheck,isAdmin,newProduct)
router.post("/deleteitem",TokenCheck,isAdmin,delProduct)
router.post("/updateitem", TokenCheck,isAdmin,updateItem)
router.post("/buy", TokenCheck,productLimitcheck,purchaseItem)

module.exports = router