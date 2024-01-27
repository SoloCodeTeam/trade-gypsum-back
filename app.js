const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const Product = require("./ProductModel/index")
const SwaggerOptions = require('./swagger/swagger.json');
const swaggerDocs = swaggerJsDoc(SwaggerOptions)
const loginRoute = require("./routes/login")
const dataRoute = require("./routes/data")
const adminRoute = require("./routes/admin")
const dotenv = require("dotenv")
dotenv.config()
/**
 * @swagger
 * tags:
 *      - name: login
 *      - name: data
 *      - name: admin
 */
var options = {
    swaggerOptions: {
      authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
    }
  };
app.use(cors({
  origin: "http://loalhost:3000"
}))
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 }) 
app.use('/api', loginRoute,dataRoute,adminRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs,options))
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