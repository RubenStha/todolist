import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { showToDolist } from './API/api'
export default function ShowToDoList() {

    const [lists,setLists] = useState([])

    const getToDolist  = async ()=>{
           const lists =  await showToDolist();
           console.log(lists)
        }

    useEffect(() =>{
        getToDolist()
    },[])
  return (
    <div>
      
    </div>
  )
}
