const { todo } = require("node:test")
const todoModel=require("../models/todo.model")
const userModel=require("../models/user.model.js")


module.exports.getTodo=async (req,res)=>{
    const todo =await todoModel.find()
    res.send(todo)

}

module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body
    console.log(req.body);
    todoModel
        .create({text})
        .then((data)=>{
            console.log(`Added Succesfully`);
            console.log(data);
            res.send(data);
        })
}


module.exports.updateTodo=(async(req,res)=>{
    const {_id,text}=req.body
    todoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send(`Updated Successfully...`))
    .catch((err)=>{
        console.log(err);
    })
})

module.exports.deleteTodo=(async(req,res)=>{
    const{_id}=req.body
    todoModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send(`Deleted Successfully....`)
    })
    .catch((err)=>{
        console.log(err);
    })
})