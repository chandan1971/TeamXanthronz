const mongoose=require("mongoose")
const User = require("./user.model")

const todoSchema=new mongoose.Schema({
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    text:{
        type:String,
        required:true,
    },

})

module.exports=mongoose.model("Todo",todoSchema)