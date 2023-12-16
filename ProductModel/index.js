const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        category:{
            type: String,
        },
        title:{
            type: String,
        },  
        img:{
            type: String,
        },
        text:{
            type: String,
        },
        name:{
            type: String,
        },
        surname:{
            type: String,
        },
        password:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product