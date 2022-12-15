import axios from "axios"
import {useMutation,useQuery,useQueryClient } from "react-query"


const baseUrl = "http://localhost:3000"
const header = "application/josn"

const api = axios.create({
  baseURL: baseUrl,
  headers:header
}

)

 function addTolist(list){ 
    return  api.post('/todolist',list)  
}
 function updateList(list){ 
  console.log(list)
    return  api.patch(`/todolist/${list.id}`,list)  
}
 function deleteList(id){ 
    console.log("id " + id)
    return  api.delete(`/todolist/${id}`,id)  
}


function getList(){
  return api.get('/todolist')
}

export const addToDoList=  ()=>{
  const queryClient = useQueryClient()
  return useMutation(addTolist)
}
export const updateToDoList=  ()=>{
  const queryClient = useQueryClient()
  return useMutation(updateList)
}
export const deleteToDoList=  ()=>{
  const queryClient = useQueryClient()
  return useMutation(deleteList)
}

export const getToDoList = ()=>{
  return useQuery("todolist",getList)
}