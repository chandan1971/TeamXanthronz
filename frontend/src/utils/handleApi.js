import axios from "axios"

const baseURL="http://localhost:8000"

const getAllTodo=(setTodo)=>{
    axios
    .get(`${baseURL}/TodoApp`)
    .then(({data})=>{
        console.log(`data---->${data}`);
        setTodo(data)
    })
}

const addTodo=(text,setText,setTodo)=>{
    axios
    .post(`${baseURL}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
}


const updateTodo=(todoId,text,setTodo,setText,setIsUpdating)=>{
    axios
    .post(`${baseURL}/update`,{_id:todoId,text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo)
        setIsUpdating(false)
    })
}

const deleteTodo=(_id,setTodo)=>{
    axios
    .post(`${baseURL}/delete`,{_id})
    .then((data)=>{
        getAllTodo(setTodo)
    })
}


export {getAllTodo,addTodo,updateTodo,deleteTodo}