import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
   console.log(posts);
   
  if (posts.length === 0) {
    return (
      <div className="w-full py-20 min-h-screen flex justify-center items-center">
        <div className="text-center -mt-40">

        <div className="animate-spin border-b-2 w-20 h-20 rounded-full mb-6 border-amber-50"></div>
        <h1 className=" animate-pulse text-xl font-semibold text-zinc-500">
          Loading
        </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 min-h-screen">
      <Container>
        <div
          className="
            grid
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5
            gap-6 
            p-4
          "
        >
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
