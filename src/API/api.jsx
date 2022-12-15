import axios from "axios"

const baseUrl = "http://localhost:3000"
const header = "application/josn"

const api = axios.create({
  baseURL: baseUrl,
  headers:header
}

)

export async function addTolist(list){ 
    return await api.post('/todolist',list)  
}
export async function updateList(list){ 
    return  await api.patch(`/todolist/${list.id}`,list)  
}
 export async function deleteList(id){ 
    return await api.delete(`/todolist/${id}`,id)  
}

export async function getList(){
  return await api.get('/todolist')
}


