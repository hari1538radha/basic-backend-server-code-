import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import { mongoURL } from "./const/const.js"


import { signuppage, getdata, getdetails, addproductData, searchdata } from "./Routes/routes.js"


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/products", addproductData)


app.get("/display", getdetails)
app.post("/signup", signuppage)
app.get("/login", getdata)
app.get("/search", searchdata)


mongoose.connect('mongodb://127.0.0.1:27017/productdb').then((res) => {
    console.log("DB connected")
    app.listen(5001, () => {
        console.log("server is running ")
    })
})