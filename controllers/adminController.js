const Product = require('../ProductModel/index')
const JWT = require("jsonwebtoken")

exports.getAdmin = async(req, res, next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        return await Product.find({"category": "admin"}).then((data)=> {
            res.status(200).json({data:data})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode =500
            }
            next(err)
            }
        )
        
    } catch (error) {
        return res.status(403).json({message: "Not Allowed"})   
    } 
}

exports.postAdmin = async(req, res, next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const body = {
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            category: "admin"
        }
        return await Product.create(body).then(data => {
                res.status(200).json({data:data})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode = 500
            }
            next(err)
            }
        )
        
    } catch (error) {
        return res.status(403).json({message: "Not Allowed"})
    }
}

exports.putAdmin = async(req, res, next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const id = req.params.adminId
        const body = {
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            category: "admin"
        }
        await Product.find({_id: id}).then((e) => {
            if(e.length == 0) return res.status(404).json({status: 404,message: `Admin not found on ${id}`})
        })
        return await Product.findByIdAndUpdate(id, body).then(data => {
                res.status(200).json({body:body})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode = 500
            }
            next(err)})
        
    } catch (error) {
        return res.status(403).json({message: "Not Allowed"})
    }
}

exports.deleteAdmin = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const id = req.params.adminId;
        await Product.find({_id: id}).then((e) => {
            if(e.length == 0) return res.status(404).json({status: 404,message: `Admin not found on ${id}`})
        })
        return await Product.findByIdAndDelete(id).then(() => {
            res.status(200).json({message:"Admin deleted successfully"})}).catch(err => {
        if (!err.statusCode) {
            err.satusCode = 500
        }
        next(err)})
        
    } catch (error) {
        return res.status(403).json({message: "Not Allowed"})
    }
}
