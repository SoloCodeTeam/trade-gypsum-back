const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        category:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },  
        img:{
            type: String,
            required: true
        },
        text:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product