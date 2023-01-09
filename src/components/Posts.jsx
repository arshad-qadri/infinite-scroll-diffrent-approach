import React, { useEffect, useState } from 'react'
import SinglePost from './SinglePost'

const Posts = () => {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
  const fetchApi = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if(data && data.length>0){
          setData((perv)=>[...perv, ...res])

   
        }else{
            setData(res)
        }
      });
  };
  useEffect(() => {
    fetchApi();
  }, [page]);
    const handleScroll = () =>{
      const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight
    try {
      if( scrollTop + innerHeight +1 >=scrollHeight){
        setPage((perv)=>perv+1)
      }
    } catch (error) {
      console.log(error);
    }
    }
useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
},[])


    
  return (
      //   <button onClick={()=>setPage((prev)=>prev+1)} >inc</button>
      // posts
    <div className='posts'>
      {data && data.length>0 && data.map((item,ind)=>(

      <SinglePost key={ind} item={item} />
      ))}
    </div>
  )
}

export default Posts
