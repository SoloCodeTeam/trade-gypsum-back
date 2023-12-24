const Product = require('../ProductModel/index')
const JWT = require("jsonwebtoken")

exports.postLogin = async(req, res, next) => {
    const body = {
        name: req.body.name,
        password: req.body.password,
        category: "admin"
    }
    return await Product.find(body).then(async(data) => {
        if (data.length > 0) {
            const token = await JWT.sign({id: data.id, name: data.name, surname:data.surname },process.env.JWT_KEY,{expiresIn:'2h'})
            res.status(200).json({data: data,token: token})
        } else {
            res.status(404).json({status: 404,message:"Login user not found"})  
        }
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500
        }
        next(err)
        }
    )

}

// exports.getLogin = async(req, res, next) => {
//     return await Product.find({"category": "login"}).then((data)=> {
//         res.status(200).send(data)
//     }).catch(err => {
//         if (!err.statusCode) {
//             err.satusCode =500
//         }
//         next(err)
//         }
//     )
// }