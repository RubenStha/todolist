import React, { useState } from 'react'
import {addToDolist} from './API/api'
export default function AddToDo() {
    const [toDoList,setToDoList] = useState([])
    const [text,setText] = useState({
      title:"",
      isDone:"inComplete"
    })

    const handleClick=()=>{
      addToDolist(text)
      const newToDo = [...toDoList,text];
      setText({...text,title:""})
      setToDoList(newToDo)
    }
    const markTodo = index => {
      const newTodos = [...toDoList];
      newTodos[index].isDone = "complete";
      setToDoList(newTodos);
    };

    const handleDelete = index => {
      setToDoList(oldValues => {
        return oldValues.filter((_, i) => i !== index)
      })
    }
    
    console.log(toDoList)
  return (
    <>
    <div>
        <label htmlFor='todolist'> Add your toDoList</label>
        <input  type="text" name="todolist" id="todolist" value={text.title} onChange={(e)=>setText({...text,title:e.target.value})}/>  
        <button onClick={handleClick}>Add to List</button>
    </div>
    <ul>
       {toDoList?.map(({title,isDone},index) => (
        <li>{title} <button onClick={()=>markTodo(index)} style={{backgroundColor:isDone==="complete"?"green":""}}>{isDone}</button>  <button onClick={()=>handleDelete(index)}>Delete</button></li>
       ))}
    </ul>
    </>
  )
}
