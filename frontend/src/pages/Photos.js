import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Photos() {
    const [post,setPost] = useState([])
    const params = useParams()
    const getPost = () =>{
       axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`).then((res) => {
           setPost(res.data)
           console.log(res.data)
       })
    }
    useEffect(() => {
        getPost()
    },[])
   

  return (
    <>
    <h1>Photos</h1> 
    {
        post.map((item,index) => {
            return (
          <div  className='imgs'>
              <h1>
                  
              </h1>
              <h2>{index+1}.{item.title}</h2>
              <img src={item.url}/>
          </div>
            )
          
        })
    }
    </>
  )
}

export default Photos