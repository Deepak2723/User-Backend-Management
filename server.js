// app.js
const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/userRoutes");
const { connectToDatabase } = require("./config/dbConnection");
require("dotenv").config()

const app=express();
const port = 3004;

app.use(cors());
app.use(express.json());//middleware to work with json data

app.use("/",userRoute); // user route

app.listen(process.env.PORT,async()=>{
    await connectToDatabase()
    console.log(`Server running at http://localhost:${port}`)
})