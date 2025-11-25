import React, { useState, useEffect } from 'react'
import Service from '../appwrite/config';


function Logo({width='100'}) {
   const [Logo, setLogo]=useState("")

  useEffect(() => {
    const feildId ="Logo";
    const url = Service.getFilePreview(feildId);
    setLogo(url); 
  }, []);
  return (
    <div className="w-33 h-10 mt-2 ">
      <img src="public/PenPoitn_LOGO.png" alt="" />
    </div>
  );
}

export default Logo