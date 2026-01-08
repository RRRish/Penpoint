import React,{useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts,setPosts]=useState([])
    const authStatus=useSelector((state)=>state.auth.status);
    //  console.log(userdata.email);
     
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if(!authStatus){     
        return (
          <div className="w-full py-8 mt-4 text-center min-h-screen ">
            <Container>
              <div className="flex justify-center ">
                <div className="  w-100 h-100  rounded-xl">
                  <h1 className="text-4xl font-bold text-slate-900 mb-4 mt-10">
                    Welcome to PenPoint
                  </h1>
                  <p className="text-xl text-slate-600 mb-5 text-balance">
                    Share your thoughts, discover amazing content, and connect
                    with a vibrant community of creators.
                  </p>
                  <h4>To View Content </h4>
                  <div className="p-2 w-full ">
                    <div className="mb-4">
                      <Link
                        to={"/login"}
                        className="text-2xl text-white font-bold bg-indigo-400 px-3 py-1 rounded"
                      >
                        Login
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={"/signup"}
                        className=" px-3 py-1  text-2xl text-white font-bold bg-indigo-400 rounded "
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
    }
  return (
    <div className="min-h-screen flex justify-center ">
      {/* <div className="border h-20 w-50 rounded-xl"></div>
      <div className="border h-20 w-50 rounded-xl"></div>
      <div className="border h-20 w-50 rounded-xl"></div>
      <div className="border h-20 w-50 rounded-xl"></div> */}
      <div >

      <Link className="text-3xl font-bold" to="/all-posts">
        {" "}
        Click Here{" "}
      </Link>
      </div>
    </div>
  );
}

export default Home