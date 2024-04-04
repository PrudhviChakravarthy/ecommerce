const express = require("express")
const { TokenCheck,isAdmin } = require("../middlewares/authJwttoken")
const {
    upload,
    uploadImage
} = require("../controllers/imageController")

router = express.Router()


router.post("/upload",upload.single("image"),uploadImage)


module.exports = router