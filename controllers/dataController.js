const Product = require('../ProductModel/index')
const JWT = require("jsonwebtoken")

exports.getData = async(req, res, next) => {
    return await Product.find({"category": "data"}).then((data)=> {
        res.status(200).send(data)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500
        }
        next(err)
        }
    )
}

exports.postData = async(req, res, next) => {
    const {token} = req.headers
    const user = await JWT.verify(token,process.env.JWT_KEY)
    if(user){
        const body = {
            img: req.body.img,
            title: req.body.title,
            text: req.body.text,
            category: "data"
        }
        return await Product.create(body).then(data => {
                res.status(200).send(data)
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode = 500
            }
            next(err)
            }
        )
    }else{
        return res.status(403).json({message: "Not Allowed"})

    }  
}

exports.putData = async(req, res, next) => {
    const {token} = req.headers
    const user = await JWT.verify(token,process.env.JWT_KEY)
    if(user){
        const id = req.params.dataId
        console.log(id);
        const body = {
            img: req.body.img,
            title: req.body.title,
            text: req.body.text,
            category: "data"
        }
        await Product.find({_id: id}).then((e) => {
            if(e.length == 0) return res.status(404).send({status: 404,message: `Admin not found on ${id}`})
        })
        return await Product.findByIdAndUpdate(id, body).then(data => {
                res.status(200).send(data)
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode = 500
            }
            next(err)})
    } else return res.status(403).json({message: "Not Allowed"})
}

exports.deleteData = async(req,res,next) => {
    const {token} = req.headers
    const user = await JWT.verify(token,process.env.JWT_KEY)
    if(user){
        const id = req.params.dataId;
        await Product.find({_id: id}).then((e) => {
            if(e.length == 0) return res.status(404).send({status: 404,message: `Admin not found on ${id}`})
        })
        return await Product.findByIdAndDelete(id).then(() => {
            res.status(200).send("Data item deleted successfully")}).catch(err => {
        if (!err.statusCode) {
            err.satusCode = 500
        }
        next(err)})
    } else return res.status(403).json({message: "Not Allowed"})
}