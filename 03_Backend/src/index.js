//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

// Approach_2: Import DB Connectoin from 'db' for better readability 
import connectDB from "./db/index.js";
import {app} from "./app.js"

connectDB()
.then(() => {
    app.on("error", (error)=>{
        console.error("MongoDB Connection Error: ", error)
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server started on port ${process.env.PORT||8000}`);
    })
})
.catch((err) => console.error(err));

// Approach_1: Entire DB Connection codebase in Index file.
/*
import express from "express";
const app = express();
// IIFE function '()()': Immidiately Invoke to connect DB
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=>{
            console.error("MongoDB Connection Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch(error){
        console.error(`MongoDB Connection Error: ${error}`)
        throw error
    }
})()
*/