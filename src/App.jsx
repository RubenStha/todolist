import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import AddToDo from './AddToDo'
import ShowToDoList from './ShowToDoList'

const reducer = (state,action) =>{
  const {type,task,setTask,index} =action
  console.log(index)
  switch(type){
    case "ADD_TASK": 
          let newToDos = state;
          newToDos = [...state,task]
          setTask({...task,title:""})
          return newToDos;
    case "DELETE":
          return state.filter((_, i) => i !== index);
    case "UPDATE":
          const newTodos = [...state];
          newTodos[index].isDone = !newTodos[index].isDone;
          return newTodos;
    default:
      return todos;
          
  }
}

export default function App() {

  const [task,setTask]=useState({
    title:"",
    isDone:false
  })
  const [todos,dispatch]= useReducer(reducer,[])

    console.log(todos)
  return (
    <div>
      <AddToDo task={task} setTask={setTask} dispatch={dispatch}/>
      <ShowToDoList todos={todos}  dispatch={dispatch}/>
    </div>
  )
}
