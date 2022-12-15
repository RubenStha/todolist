import React from 'react'
import {QueryClient,QueryClientProvider} from 'react-query'
import { useState,useReducer } from 'react'
import AddToDo from './AddToDo'
import { getToDoList,addToDoList} from './API/api'
import ShowToDoList from './ShowToDoList'


// const reducer = (state,action) =>{
  
//   const {mutate:addList} = addToDoList()
  // const {mutate:deleteList} = deleteToDoList()
  // const {mutate:updateList} = updateList()

  // const {type,task,id} =action
  // console.log(index)
  // switch(type){
  //   case "ADD_TASK":  
  //         return addList(task) ;
    // case "DELETE":
    //       return deleteList();
    // case "UPDATE":
    //       return updateList();
//     default:
//       return state;    
//   }
// }

const queryClient = new QueryClient()

export default function App() {
  

  const [task,setTask]=useState({
    title:"",
    isDone:false
  })

  // const [todos,dispatch]= useReducer(reducer,[])

  return (
    <QueryClientProvider client={queryClient}>
      <AddToDo task={task} setTask={setTask} />
      <ShowToDoList />
    </QueryClientProvider>
  )
}
