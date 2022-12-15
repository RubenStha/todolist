import React from 'react'
import {updateList, deleteList } from './API/api'
import {useMutation } from 'react-query'


export default function ShowToDoList({todos,refetch}) {
  
  const {mutate:update} = useMutation(updateList,{onSuccess: refetch})
  const {mutate} = useMutation(deleteList,{onSuccess: refetch})

  function handleClick(id,isDone){
    update({id,isDone:!isDone});
  }

  return (
    <div>
        {/* <button onClick={refetch}>click me</button> */}
        {todos?.data?.map(({title,isDone,id})=> (
          <li key={id}>{title}  <button   style={{backgroundColor:isDone?"green":""}} onClick={()=>handleClick(id,isDone)}>{isDone?"Complete":"Incomplete"}</button> <button onClick={()=>mutate(id)}>Delete</button></li>
        ))}
    </div>
  )
}
