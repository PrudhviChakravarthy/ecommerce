const express = require("express")
const { isAdmin,TokenCheck } = require("../middlewares/authJwttoken")
const {
    createComment,
    deleteComment,
    likeComment,
    dislikeComment,
    removeComment,
    getProductComments
} = require("../controllers/commentsController")

router = express.Router()

router.delete("/deletecomment",TokenCheck,deleteComment)
router.post("/createcomment",TokenCheck,createComment)
router.post("/likecomment",TokenCheck,likeComment)
router.get("/getcomments",getProductComments)
router.post("/dislikecomment",TokenCheck,dislikeComment)
router.delete("/removecomment",TokenCheck,isAdmin,removeComment)


module.exports = router