import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function AllPost() {
    const [posts, setPosts]=useState([])
    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents);
        }                            
    })
  if(posts.length==0){
    return (
        <div className='w-full py-8 min-h-screen'>
            <h1 className="text-xl">Posts are on the way....</h1>

        </div>
    )
  }
  return (
    <div className='w-full py-8 min-h-screen'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/5 mb-3 '>
                <PostCard  {...post}/>
                </div>
            ))}
            </div>
        </Container>
        </div>
  )
}

export default AllPost