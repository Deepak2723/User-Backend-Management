const mongoose = require("mongoose");

const connectToDatabase=async()=>{mongoose.connect('mongodb://localhost:27017/user_management').then((con)=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log("Error While Connecting to DB",err.message)
})}

module.exports ={connectToDatabase};