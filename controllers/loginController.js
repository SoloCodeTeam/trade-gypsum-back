
const { validationResult } = require('express-validator');
const Product = require('../ProductModel/index')

exports.getLogin = async(req, res, next) => {
    return await Product.find({"category": "login"}).then((data)=> {
        res.status(200).send(data)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500
        }
        next(err)
        }
    )
}


// .try {   
//     return res.status(200).send()
// } catch (error) {
//     console.log(error)
//     return res.status(500).send({status:500,message: error.message})
// }