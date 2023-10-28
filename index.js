const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const Product = require("./ProductModel/index")
const port = process.env.PORT || 5000
//
mongoose.connect("mongodb+srv://ibrohimov0:abdulloh_070@cluster0.zbdtj61.mongodb.net/")
.then(() => {
    console.log("Successful connected to MongoDb")
}).catch((error) => {
    console.error(error)
})
const swaggerOption ={
    swaggerDefinition: {
        info: {
            title: "Trade-gypsum Api",
            description: "Trade-gypsum Api Information",
            contact: {
                name:"SoloCode Team"
            },
            servers: ["http://localhost:5000"]
        }
    },
    //[".routes/*.js"]
    apis:["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//Routes
/**
 * @swagger
 * /api/data:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          "200":
 *              description: A sucessful response
 *  post:
 *      parameters:
 *          name:param1
 *          type: string
 */
app.get("/api/data", async(req,res) => {
    try {
        const product = await Product.find({})
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
        res.status(500).send({status:500,message: error.message})
    }
})

app.post("/api/data", (req,res) => {
    res.status(200).send("Data posted")
});
//
app.listen(port, () => {console.log(`Server listening on port ${port}`)})