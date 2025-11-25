import React,{useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts,setPosts]=useState([])
    const userdata=useSelector((state)=>state.auth.userData);
    //  console.log(userdata.email);
     
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if(posts.length===0){     
        return (
          <div className="w-full py-8 mt-4 text-center min-h-screen">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <Link to={"/login"}  className='text-2xl font-bold'>
                  Login to view articles
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        );
    }
  return (
    <div className='w-full py-8 min-h-screen'>
       <Container>
           <div className='flex felx-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                       <PostCard {...post} />
                </div>
            ))}
           </div>
       </Container>
    </div>
  )
}

export default Home