
const { validationResult } = require('express-validator');
const Product = require('../ProductModel/index')

exports.getLogin = () => {x
    console.log("ok");
    app.get("/api/data", async(req,res) => {
        try {   
            const product = await Product.find({})
            return res.status(200).send(product)
        } catch (error) {
            console.log(error)
            return res.status(500).send({status:500,message: error.message})
        }
    })
}