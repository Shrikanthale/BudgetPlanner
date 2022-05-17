const mongoose = require('mongoose');
const express = require('express')
// const dotenv = require('dotenv')

const connection = require('./cinbect');
const cors = require('cors');
// const User = require('./model/userSchema')



const app = express();
app.use(cors());
app.use(express.json())
app.use(require('./router/auth'))

connection();


// dotenv.config({path:'./config.env'})

// const DB= process.env.DATABASE

const middleware = (req, res, next) => {
    console.log("this is Middleware")
    next();
}




app.get('/contact', middleware, (req, res) => {
    console.log("middlware contact to connteact")
    res.send("Your Contact Page")
})


app.listen(8000, () => {
    console.log("Connect on PORT 8000")
})


// var http = require('http')

// http.createServer((req,res)=>{
//     console.log("You create serve");
//     res.write("hello world")
// }).listen(8080)

// console.log("You create serve");

// mongodb+srv://shrikantkanthale:<password>@cluster0.okaul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority