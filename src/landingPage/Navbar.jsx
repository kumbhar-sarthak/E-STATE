import React  from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Navbar = () => {
  return (
    <nav className=" h-20 bg-white  mx-2 flex justify-center items-center">
      <div className="container flex flex-wrap justify-between items-center">
        <div className="text-black text-xl font-bold cursor-pointer">
          E-STATE
        </div>
        <div className="flex items-center space-x-10">
          <div>
            <a href="#about">
            About
            </a>
          </div>
          <button onClick={()=>{useNavigate('/Profile')}} className="text-black mx-2 cursor-pointer">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;