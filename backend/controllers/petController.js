const petsModel = require("../models/petsModel");

const addpet = async(req,res) =>{
    const petdata = req.body
    if (petdata) {
        const addpetdata = await petsModel.create(petdata)
        if (addpetdata) {
            res.status(200).send("adding the data success")
        }else{
            res.status(402).send("adding the data failed")
        }
    }else {
        res.status(403).send("data not provided properly please check")
    }
}

const getpets = async(req, res) => {
    const Query = req.query || {}
    console.log(Query)
    const minprice = "minprice" in Query ? parseInt(Query.minprice) : 20
    const maxprice = "maxprice" in Query ? parseInt(Query.maxprice) : 100
    const skip = "page" in Query ? parseInt(Query.page)*10  : 10
    const sortby = "sortby" in Query ? Query.sortby : 0
    const sort = "sort" in Query ? parseInt(Query.sort) : 0
    const sorting = sortby && sort ? `{"${sortby}":${sort}}` : {}
    console.log(sortby,sorting)
    const items = await petsModel.find({
        "price": {
          $gte: minprice,
          $lte: maxprice
        }
      }).sort(sorting).skip(skip).limit(40)
    res.json({"petsdata" : items})
}


module.exports = {
    addpet,
    getpets
}