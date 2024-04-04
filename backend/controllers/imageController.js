const imagesModel = require("../models/imagesModel");
const multer = require("multer")
const crypto = require("crypto")
const path  = require("path")

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images')
    },
    filename : (req,file, cb) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err) return cb(err);
            const filename = buf.toString('hex') + path.extname(file.originalname); // Use SHA-256 hash as filename
            cb(null, filename); // Save the file with the new filename
        });
    }
})

const upload = multer({storage:storage})


const getImages = async(req,res) =>{
    const productid = req.body.productid
    
}

const deleteImage = async(req,res) => {
    const imageid = req.body.imageid

}

const uploadImage = async(req,res) => {
    if (!req.file){
        return res.status(400).json({"error":"image file not mentioned"})
    }else{
        const filename = req.file.filename
        const productid = req.body.productid
        const uploadimageinfo = await imagesModel.create({imagename:filename, productid:productid})
        if (uploadimageinfo){
            return res.status(200).json({"messge":`image filed uplaoded ${req.file.filename}`})
        }else{
            return res.status(403).json({"message":"image info adding failed"})
        }
    }
}

const getImage = async(req,res) => {
    const imageid = req.body.imageid
}


module.exports = {
    upload,
    uploadImage
}

