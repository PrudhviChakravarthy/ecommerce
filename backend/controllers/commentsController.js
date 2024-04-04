const commentsModel = require("../models/commentsModel");

const createComment = async(req,res) => {
    const comment = req.body
    const updatedcomment = {...comment,"userid":req.user.id}
    if(updatedcomment){
        const addComment = await commentsModel.create(updatedcomment)
        console.log(addComment)
        if(addComment){
            res.status(200).send("comment updated sucessfully")
        }
    }
}
const deleteComment = async(req,res) => {
    const commentid = req.body.commentid
    const id = req.user.id
    const deleteComment = await commentsModel.deleteOne({_id:commentid,userid:id})
    console.log(deleteComment)
    if (deleteComment.acknowledged){
        res.status(200).send("comment deleted")
    }else{
        res.status(403).send("comment deletion unsuccesful")
    }
}

const likeComment = async(req,res) => {
    const commentid = req.body.commentid
    const id = req.user.id
    const isdisliked = await commentsModel.find({_id:commentid ,dislikedby:{$eq : id}})
    if (!isdisliked){
        var likedcomment = await commentsModel.updateOne({_id:commentid,likedby :{$ne : id}},{$addToSet : {likedby:id},$inc:{likes: 1,dislikes : -1},$pull : {dislikedby:id}})
    }else{
        var likedcomment = await commentsModel.updateOne({_id:commentid,likedby :{$ne : id}},{$addToSet : {likedby:id},$inc:{likes: 1}})
    }
    if (likedcomment.modifiedCount){
        res.status(200).send("comment like upadated")
    }else{
        res.status(403).send("like not upadated")
    }
}
const dislikeComment = async(req,res) => {
    const commentid = req.body.commentid
    const id = req.user.id
    const isliked = await commentsModel.find({_id:commentid ,likedby:{$eq : id}})
    if (!isliked){
        var dislikedcomment = await commentsModel.updateOne({_id:commentid,dislikedby :{$ne : id}},{$addToSet : {dislikedby:id},$inc:{dislikes: 1,likes : -1},$pull : {likedby:id}})
    }else{
        var dislikedcomment = await commentsModel.updateOne({_id:commentid,dislikedby :{$ne : id}},{$addToSet : {dislikedby:id},$inc:{dislikes: 1}})
    }
    if (dislikedcomment.modifiedCount){
        res.status(200).send("comment dislike upadated")
    }else{
        res.status(403).send("dislike not upadated")
    }
}

const removeComment = async(req,res) => {
    const commentid = req.body.commentid
    const removedCommnet = await commentsModel.deleteOne({_id:commentid})
    console.log(removedCommnet)
    if (removedCommnet.acknowledged){
        res.status(200).send("comment removed")
    }else{
        res.status(403).send("comment removing unsuccesful")
    }
}

const getProductComments = async(req,res) => {
    const productid = req.body.productid
    const productComments = await commentsModel.find({productid:productid},{userid:1,comment:1,likes:1,dislikes:1})
    console.log(productComments)
    if(productComments){
        res.json(productComments)
    }
}



module.exports = {
    createComment,
    deleteComment,
    likeComment,
    dislikeComment,
    removeComment,
    getProductComments
}