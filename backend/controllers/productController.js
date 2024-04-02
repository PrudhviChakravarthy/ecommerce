const productsModel = require("../models/productsModel");



const newProduct = async(req,res) => {
    const product = req.body
    const additem = productsModel.create(product)
    if (additem){
        res.json({"message":`item added to database ${req.body.ProductName}`})
    }

}

const productLimitcheck = async(req,res,next) => {
    const productId = req.body.productid
    const noofitems = req.body.noofitems
    console.log(productId)
    const item = await productsModel.findOne({productid : productId},{max_purchase_limit:1})
    console.log("max_limit",item.max_purchase_limit)
    if (noofitems < item.max_purchase_limit){
        next()
    }else{
        res.status(403).send("max limit for purchase")
    }
}

const purchaseItem = async(req,res) => {
    const productId = req.body.productid
    const noofitems = req.body.noofitems
    const purchase = await productsModel.updateOne({productid : productId,quantity: { $gte: 3 }},{$inc: {quantity: -noofitems }} )
    if (purchase.modifiedCount){
        res.status(200).send("count updated successfully")
    }else{
        res.status(204).send("cound updation failed")
    }
}


const getItems = async(req, res) => {
    const Query = req.query || {}
    console.log(Query)
    const minprice = "minprice" in Query ? parseInt(Query.minprice) : 20
    const maxprice = "maxprice" in Query ? parseInt(Query.maxprice) : 100
    const skip = "page" in Query ? parseInt(Query.page)*10  : 10
    const sortby = "sortby" in Query ? Query.sortby : 0
    const sort = "sort" in Query ? parseInt(Query.sort) : 0
    const sorting = sortby && sort ? `{"${sortby}":${sort}}` : {}
    console.log(sortby,sorting)
    const items = await productsModel.find({
        "newPrice": {
          $gte: minprice,
          $lte: maxprice
        }
      }).sort(JSON.parse(sorting)).skip(skip).limit(10)
    res.json({"usersdata" : items})
}

const updateItem = async(req,res) => {
    const updateditem = req.body
    const productid  = parseInt(req.body.productid)
    const itemupdate = await productsModel.updateOne({productid:productid},updateditem)
    console.log(itemupdate)
    if (itemupdate.modifiedCount){
        res.status(200).send("item updated successfully")
    }else{
        res.status(400).send("Item failed to update")
    }
}

const delProduct = async(req, res) => {
    const productid  = parseInt(req.body.productid)
    const deleteproduct = await productsModel.deleteOne({productid: productid})
    console.log(deleteproduct)
    if (deleteproduct.deletedCount){
        res.json({"message": "product deleted successfully"})
    }else {
        res.status(401).send("deletion failed")
    }
}


module.exports = { 
     newProduct, 
     getItems,
     delProduct,
     updateItem,
     purchaseItem,
     productLimitcheck
      }