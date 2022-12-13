import axios from 'axios'

export async function addToDolist(list){
    try {
       const  {data} = await axios.post('https://jsonplaceholder.typicode.com/posts',list)
        console.log(data)
        return data
    } catch (error) {
       console.log(error) 
    }
}
export async function showToDolist(list){
    try {
       const  {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    } catch (error) {
       console.log(error) 
    }
}