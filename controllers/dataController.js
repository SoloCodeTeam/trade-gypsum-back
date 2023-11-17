const Product = require('../ProductModel/index')
const Joi = require("joi")

function validateData(data) {
    const schema = {
        img: Joi.string().required(),
        title: Joi.string().required(),
        text: Joi.string().required()
    }
    return Joi.validate(data, schema)
}

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
    const {error} = validateData(req.body)
    if(error) return res.status(400).send({status:400,message:error.details[0].message})
    else {
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
                err.satusCode =500
            }
            next(err)
            }
        )
    }
}
