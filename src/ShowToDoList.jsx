import React from 'react'
import { getToDoList,updateToDoList,deleteToDoList } from './API/api'

export default function ShowToDoList() {
  const {data:todos} = getToDoList()
  const {mutate:update} = updateToDoList()
  const {mutate} = deleteToDoList()
  return (
    <div>
      
        {todos?.data?.map(({title,isDone,id})=> (
          <li key={id}>{title}  <button   style={{backgroundColor:isDone?"green":""}} onClick={()=>update({id,isDone:!isDone})}>{isDone?"Complete":"Incomplete"}</button> <button onClick={()=>mutate(id)}>Delete</button></li>
        ))}
    </div>
  )
}
