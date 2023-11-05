const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
//const swaggerJsDoc = require("swagger-jsdoc");
//const swaggerUi = require("swagger-ui-express");
const Product = require("./ProductModel/index")
const port = process.env.PORT || 5000
//
app.use(express.json())
mongoose.connect("mongodb+srv://ibrohimov0:abdulloh_070@cluster0.zbdtj61.mongodb.net/")
.then(() => {
    console.log("Successful connected to MongoDb")
}).catch((error) => {
    console.error(error)
})
app.get("/api/data", async(req,res) => {
    try {
        const product = await Product.find({})
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
        res.status(500).send({status:500,message: error.message})
    }
})
// 
app.post("/api/data", async (req,res) => {
    try {
        const product = await Product.create(req.body)
        console.log(req.body);
        res.status(200).send({status: 200,data:product})
    } catch (error) {
        console.log(error)
        res.status(500).send({status:500,message: error.message})
    }
})

app.listen(port, () => {console.log(`Server listening on port ${port}`)})





//bruuh

//
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Data:
//  *       type: object
//  *       required:
//  *         - title
//  *         - img
//  *         - date
//  *         - finished
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: data id
//  *         title:
//  *           type: string
//  *           description: The title of your data
//  *         img:
//  *           type: string
//  *           description: The data img
//  *        date:
//  *           type: number
//  *           description: The data date
//  *         finished:
//  *           type: boolean
//  *           description: Whether you have finished reading the book
//  *         createdAt:
//  *           type: string
//  *           format: date
//  *           description: The date the data was added
//  *       example:
//  *         id: d5fE_asz
//  *         title: The New Turing Omnibus
//  *         author: Alexander K. Dewdney
//  *         finished: false
//  *         createdAt: 2020-03-10T04:05:06.157Z
//  */
// //

/**
//  * @swagger
//  *  tags:
//  *      name: Data
//  *      description: The data managing API
//  *  /api/data:
//  *      post:
//  *          summary: create new data
//  *          tags: [Data]
//  *          requestBody: 
//  *              required: true
//  *              content: 
//  *                  application/json
//  *                      schema:
//  *                          $ref: "#/components/schemas/Data"
//  *          responses: 
//  *              200:
//  *                  description: The created data
//  *                  content:
//  *                      application/json:
//  *                          schema:
//  *                              $ref: "#/components/schemas/Data"
//  *              500:
//  *                  description: Some server error
//  */

//Routes
// /**
//  * @swagger
//  * /api/data:
//  *  get:
//  *      description: Use to request all customers
//  *      responses:
//  *          "200":
//  *              description: A sucessful response
//  */

//const swaggerOption ={
    //     swaggerDefinition: {
    //         info: {
    //             title: "Trade-gypsum Api",
    //             description: "Trade-gypsum Api Information",
    //             contact: {
    //                 name:"SoloCode Team"
    //             },
    //             servers: ["http://localhost:5000"]
    //         }
    //     },
    //     //[".routes/*.js"]
    //     apis:["index.js"]
    // }

   // const swaggerDocs = swaggerJsDoc(swaggerOption)
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))