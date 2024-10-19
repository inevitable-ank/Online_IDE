import React from "react";
import logo from "../assets/logo.png";
import { FiDownload } from "react-icons/fi";


const EditorNavbar = () => {
  return (
    <>
      <div className="EditorNavbar flex items-center justify-between px-[50px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className="w-[200px] cursor-pointer" src={logo} alt="" />
        </div>
        <p>File/ <span className='text-[gray]'>My first project</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]'><FiDownload /></i>
      </div>
    </>
  );
};

export default EditorNavbar;
