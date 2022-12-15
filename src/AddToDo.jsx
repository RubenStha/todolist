import React from 'react'
import {addToDoList} from './API/api'


export default function AddToDo({task,setTask}) {
  const {mutate} = addToDoList()
  // console.log(data)
  return (
  
    <div>
        <label htmlFor='todolist'> Add your toDoList</label>
        <input  type="text" name="todolist" id="todolist" value={task.title} onChange={(e)=>setTask({...task,title:e.target.value})}   />  
        <button onClick={()=>mutate(task)}>Add to List</button>
    </div>
    
  )
}
