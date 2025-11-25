import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    // console.log(featuredImage);
    
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-50 h-50 bg-white border border-gray-400  p-4   rounded-xl overflow-hidden">
        <div className="w-40 h-25  justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
    </Link>
  );
}

export default PostCard;
