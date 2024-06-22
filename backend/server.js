const express = require('express')
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectDB')
const mongoose = require('mongoose');
const taskModel = require('./model/taskmodel');
const  Routes  = require('./routers/taskRouter');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3001


//midelware
//  const logger = (req, res, next) =>{
//   console.log("Midelware run");
//   next();
//  }
app.use(express.json()) // this is express midleware
app.use(express.urlencoded({extended: false}))

// this express midleware helps to the frontend share resourse / simply we can use/ app.use(cors())
app.use(cors())

app.use("/api/task", Routes)
// Easy way to connect mongo db method 1

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=> console.log(`app runing on port ${PORT}`))
    })
    .catch((err)=>{console.log(err)})



// ---- mongo db connection method 2

// const startServer = async() => {
//   try {
//     await connectDB();
//     app.listen(PORT, ()=> console.log(`app runing on port ${PORT}`))
//   } catch (error) {
//    console.log(error);
//   }
// }

// startServer();