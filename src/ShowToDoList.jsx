import React from 'react'
import { useState } from 'react'

export default function ShowToDoList({todos,dispatch}) {
  return (
    <div>
        {todos?.map(({title,isDone},i)=> (
          <li>{title}  <button   style={{backgroundColor:isDone?"green":""}} onClick={()=>dispatch({type:"UPDATE",index:i})}>{isDone?"Complete":"Incomplete"}</button> <button onClick={()=>dispatch({type:"DELETE",index:i})}>Delete</button></li>
        ))}
    </div>
  )
}
