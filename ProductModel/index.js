const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        status:{
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