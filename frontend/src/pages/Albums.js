import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Albums() {

    const [post,setPost] = useState([])
    const params = useParams();
    const getPost = () =>{
       axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`).then((res) => {
           setPost(res.data)
           console.log(res.data)
       })
    }
    useEffect(() => {
        getPost()
    },[])
    const AlbumsPage = (id) => {
        window.location = `/photos/${id}`;
      };  

  return (
    <>
    <h1>Albums</h1> 
    {
        post.map((item,index) => {
            return (
                <div key = {item.id} className='albumbox'>
                <div className='albumbox1'> 
                <p>{index +1}. </p>
                <p>{item.title}</p>
              <button  onClick={() => AlbumsPage(item.id)}>
                Click to get Photos
              </button>
              </div>
            </div>
            )
          
        })
    }
    </>
  )
}

export default Albums