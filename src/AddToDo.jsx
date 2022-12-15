import React from 'react'
import {addTolist} from './API/api'
import {useMutation} from 'react-query'


export default function AddToDo({task,setTask,refetch}) {

  const {mutate} = useMutation(addTolist,{onSuccess:refetch})
  // console.log(data)
  return (
  
    <div>
        <label htmlFor='todolist'> Add your toDoList</label>
        <input  type="text" name="todolist" id="todolist" value={task.title} onChange={(e)=>setTask({...task,title:e.target.value})}   />  
        <button onClick={()=>mutate(task)}>Add to List</button>
    </div>
    
  )
}
