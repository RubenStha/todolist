import React from 'react'
import { useState} from 'react'
import AddToDo from './AddToDo'
import ShowToDoList from './ShowToDoList'
import { useQuery } from 'react-query'
import { getList } from './API/api'

export default function App() {
  const {data:todos,refetch} = useQuery("todolist",getList)

  const [task,setTask]=useState({
    title:"",
    isDone:false
  })




  return (
    <div>
      <AddToDo task={task} setTask={setTask} refetch={refetch}/>
      <ShowToDoList todos={todos} refetch={refetch}/>
    </div>
    
  )
}
