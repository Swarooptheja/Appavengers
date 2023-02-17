const bodyParser = require("body-parser");
let express=require('express');
let cors=require('cors')
const { connectionurl } = require("./Conection/db");
// const { connection } = require('mongoose')
const { notFound, errorHandler } = require('./errorHandle')
const { Userrouterallbooks } = require('./Routers/Userrouter')

let app=express()
app.use(cors({
   origin:"*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/',(req,res)=>{
//     res.json('welcome to the home page')
// })

app.use("/",Userrouterallbooks)
app.use(notFound)
app.use(errorHandler)
app.listen(6000,async()=>{
   try{
    await connectionurl
    console.log("connection successful")
   }
   catch(err){
    console.log(err)
   }
})