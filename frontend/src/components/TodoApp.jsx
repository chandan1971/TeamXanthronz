import { useEffect, useState } from "react";
import { addTodo, getAllTodo ,updateTodo,deleteTodo} from "../utils/handleApi.js";
import Todo from "./Todo.js"
import "./TodoApp.css"
import TEAMlogo from "./assets/TEAM_logo.png"


function TodoApp() {

  const [todo,setTodo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsUpdating]=useState(false)
  const [todoId,setTodoId]=useState("")

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }
  return (
    <div className="Todobody">
    <img src={TEAMlogo} alt="Club Logo" className="Todologo" />
    <div className="TodoApp">
      <div className="Todocontainer">
        <h1>NOTICE</h1>
        <div className="Todotop">
          <input type="text" 
          placeholder="TEAM_XANTHRONZ"
          value={text}
          onChange={(event)=>{
            setText(event.target.value)
          }}
          />
          <div className="Todoadd" 
          onClick={isUpdating? ()=>updateTodo(todoId,text,setTodo,setText,setIsUpdating):()=>addTodo(text,setText,setTodo)}>
            {isUpdating ? "Update":"Publish"}
          </div>
        </div>
        <div className="Todolist">
          {todo.map((item)=> <Todo
            username={item.username}
            key={item._id}
            text={item.text}
            updateMode={()=>{
              updateMode(item._id,item.text)
            }}
            deleteTodo={()=>deleteTodo(item._id,setTodo)}
            />)}
        </div>
      </div>
    </div>
  </div>
  );
}

export default TodoApp;
