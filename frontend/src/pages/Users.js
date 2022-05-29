import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'
import { useParams } from 'react-router-dom'
function Users() {
    const [post,setPost] = useState([])
    const getPost = () =>{
       axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
           setPost(res.data)
           console.log(res.data)
       })
    }
    useEffect(() => {
        getPost()
    },[])
    const UsersPage = (id) => {
        window.location = `/albums/${id}`;
      };  

  return (
    <>
    <h1>Users</h1> 
    {
        post.map((item) => {
            return (
                <div key = {item.id} className='box'>
                <div className='box1'>  
                <p>{item.id}.</p>
                <p>name:-{item.name} 
              <button className='button' onClick={() => UsersPage(item.id)}>
                Click to get Albums
              </button>
                </p>
                </div> 
            </div>
            )
          
        })
    }
    </>
  )
}

export default Users;