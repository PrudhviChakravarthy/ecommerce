const express = require('express')

const {homePage}  = require("../controllers/homepageController");
const { TokenCheck ,isAdmin} = require('../middlewares/authJwttoken');


const router = express.Router()

router.get("/",TokenCheck,homePage);

module.exports = router