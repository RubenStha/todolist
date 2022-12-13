import React from 'react'
export default function AddToDo({task,setTask,dispatch}) {
  return (
    <>
    <div>
        <label htmlFor='todolist'> Add your toDoList</label>
        <input  type="text" name="todolist" id="todolist" value={task.title} onChange={(e)=>setTask({...task,title:e.target.value})}   />  
        <button onClick={()=>dispatch({type:"ADD_TASK",task:task,setTask:setTask})}>Add to List</button>
    </div>
    {/* <ul>
       {todos?.map(({title,isDone},index) => (
        <li>{title} <button  style={{backgroundColor:isDone==="complete"?"green":""}}>{isDone}</button>  <button onClick={()=>handleDelete(index)}>Delete</button></li>
       ))}
    </ul> */}
    </>
  )
}
