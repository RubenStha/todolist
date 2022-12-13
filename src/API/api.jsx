import axios from 'axios'


let headers = {
    "Content-Type": "application/json",
  };
  
  const baseURL = "https://jsonplaceholder.typicode.com"

  const api = axios.create({
    baseURL: baseURL,
    headers: headers
  });
  

export async function addToDolist(list){
    try {
       const  {data} = await api.post('/posts',list)
        console.log(data)
        return data
    } catch (error) {
       console.log(error) 
    }
}
export async function showToDolist(list){
    try {
       const  {data} = await api.get('/posts')
        return data
    } catch (error) {
       console.log(error) 
    }
}