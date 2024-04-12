const express = require("express")
const { TokenCheck,isAdmin } = require("../middlewares/authJwttoken")
const {
    upload,
    uploadImage,
    getImage
} = require("../controllers/imageController")

router = express.Router()


router.post("/upload",upload.single("image"),uploadImage)
router.get("/getimage/:imagename",getImage)


module.exports = router