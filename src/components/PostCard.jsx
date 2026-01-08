import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser"

function PostCard({ $id, title, featuredImage, content }) {
    // console.log(featuredImage);
    
  return (
    <Link to={`/post/${$id}`}>
      {/* <div className="w-50 h-50 bg-white  p-4   rounded-xl  shadow-sm hover:shadow-md hover:w-55 hover:55 transition-all duration-300 ease-in-out ">
        <div className="w-40 h-25  justify-center mb-4 ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover object-center w-full h-full "
          />
        </div>
        <h4 className="text-xl font-bold ">{title}</h4>
      </div> */}
      <div className="  flex items-center justify-center  ">
        <div className=" w-full  overflow-hidden shadow-2xl rounded-t-2xl">
          <div
            class="w-60 h-40 hover:w-70 hover:h-56 transition-all duration-300 ease-in-out
"
          >
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              className="w-full h-full object-cover bg-center"
            />
          </div>
          <div className="p-5 text-white bg-slate-800 rounded-b-2xl">
            <h4 className="text-xl font-bold mb-4 leading-tight">{title}</h4>
            <div className="line-clamp-4 text-sm font-light">{parse(content)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
