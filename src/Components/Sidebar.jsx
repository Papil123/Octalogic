import React from 'react';
import logo from "../assets/Logo.png"
import v1 from  "../assets/Vector (1).png"
import v2 from "../assets/ic_outline-queue-music.png"
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="h-screen w-1/10   bg-gray-800 text-white p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-4">
        <img src={logo} alt="Logo" className="w-14 h-14" />
      </div>
      
      {/* Sidebar options */}
      <div>
        <ul>
            <div>
            <div className="mb-2">
             <img src={v1} alt="Logo" className="w-6 h-6 m-auto "  />
            </div>
            <li className="  mb-2  ">
             <Link to="/" className="text-white hover:text-blue-500 m-auto">Overview</Link>
            </li>
            </div>
        
          <div className="mb-2">
           <img src={v2} alt="Logo" className="w-8 h-8 m-auto" />
          </div>
          <li className="mb-2">
            <Link to="/courses" className="text-white hover:text-blue-500">Courses</Link>
          </li>
        </ul>
      </div>

      {/* Logout button */}
      <div className="mt-auto">
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
