const {Router}=require("express");
const { getTodo, deleteTodo, updateTodo } = require("../controllers/todo.controller");
const {saveTodo} = require("../controllers/todo.controller");
const User = require("../models/user.model");

const router=Router()

router.post('/register',(req,res)=>{
    User
    .create(req.body)
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

router.post('/login',function (req,res){
    const {email,password}=req.body
    User.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record exists")
        }
    })

})

router.get('/TodoApp',getTodo)
router.post('/save',saveTodo)
router.post('/delete',deleteTodo)
router.post('/update',updateTodo)


module.exports=router;
