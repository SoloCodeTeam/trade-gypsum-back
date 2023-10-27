const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        img:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        date:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product