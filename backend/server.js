const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose");
const router = require("./routes/todo.routes");
require("dotenv").config()


const app=express();
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server listening to PORT:${PORT}`);
})

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log("MONGODB Connection failed:",err);
})

app.use(router);

