
let mongoose=require('mongoose')

require('dotenv').config()
let connectionurl=mongoose.connect(process.env.Connect)

module.exports={
    connectionurl
}