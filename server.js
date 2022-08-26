import express from "express";
 
import cors from "cors";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import { mongoURL }  from "./const/const.js"

//import  {} from "./Routes/routes/js"
const app = express();

app.use(cors());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(mongoURL).then((res)=>
{
    console.log("DB connected")
    app.listen(5000,()=>
{
    console.log("server is running ")
})
})

