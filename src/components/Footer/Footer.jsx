import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo';


function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-8 md:py-12 w-full">
      <div className="container mx-auto px-4 md:px-">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-6">
          <Link to={"/"} className="flex items-center gap-2" prefetch={false}>
           <Logo/>
          </Link>
          <nav className="flex gap-6 mt-4 md:mt-0">
            <Link to={"/all-post"} className="hover:text-white" prefetch={false}>
              All Post
            </Link>
            <Link to={"/add-post"} className="hover:text-white" prefetch={false}>
              Add Post
            </Link>
          </nav>
        </div>
        <div className="text-center text-sm">
          {"© 2025 SolMedia™ All Rights Reserved."}
        </div>
      </div>
    </footer>
  );
}

export default Footer