const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        category:{
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