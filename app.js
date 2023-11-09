const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const Product = require("./ProductModel/index")
const port = process.env.PORT || 5000
const SwaggerOptions = require('./swagger/swagger.json');
const swaggerDocs = swaggerJsDoc(SwaggerOptions)
const loginRoute = require("./routes/login")

app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 }) 
app.use('/api', loginRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message});
})
mongoose.connect("mongodb+srv://ibrohimov0:abdulloh_070@cluster0.zbdtj61.mongodb.net/"
).then(result =>{
    app.listen(process.env.PORT || 8080); 
    console.log("App started")
}).catch(err =>{
    console.log(err)
})



//function validateAdmin(admin) {
    //     const schema = {
    //         name: Joi.string().min(3).required(),
    //         age: Joi.number().min(16).required(),
    //         type: Joi.string().required()
    //     }
    //     return Joi.validate(admin, schema)
    // }