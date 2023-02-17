const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        
        
    },
    price:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:true,
        
    },
    initialprice:{
        type:String,
        required:true,
    },
    
});

let Marati=mongoose.model("marati",userSchema)

module.exports={
    Marati
}