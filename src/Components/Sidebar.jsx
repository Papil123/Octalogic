// import React from 'react';
// import logo from "../assets/Logo.png"
// import v1 from  "../assets/Vector (1).png"
// import v2 from "../assets/ic_outline-queue-music.png"
// import { Link } from 'react-router-dom';



// const Sidebar = () => {
//   return (
//     <div className="h-screen w-1/10   bg-gray-800 text-white p-4 flex flex-col">
//       {/* Logo */}
//       <div className="mb-4">
//         <img src={logo} alt="Logo" className="w-14 h-14" />
//       </div>
      
//       {/* Sidebar options */}
//       <div>
//         <ul>
//             <div>
//             <div className="mb-2">
//              <img src={v1} alt="Logo" className="w-6 h-6 m-auto "  />
//             </div>
//             <li className="  mb-2  ">
//              <Link to="/" className="text-white hover:text-blue-500 m-auto">Overview</Link>
//             </li>
//             </div>
        
//           <div className="mb-2">
//            <img src={v2} alt="Logo" className="w-8 h-8 m-auto" />
//           </div>
//           <li className="mb-2">
//             <Link to="/courses" className="text-white hover:text-blue-500">Courses</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Logout button */}
//       <div className="mt-auto">
//         <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full w-full">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom'; 
import {MdOutlineDashboard,MdOutlineQueueMusic,MdLogout} from "react-icons/md"
import { FiSettings } from 'react-icons/fi';
// import MainRoutes from '../Routes/mainRoutes';
import Logo from '../assets/Logo.png';

const Sidebar = () => {
  return (
  
<>
<div className='min-h-screen w-28 p-4 bg-white flex flex-col justify-between border-r-4 border-gray-500'>
        <div className='flex flex-col items-center'>
            <div> <Link to='/'>
            <div>
            <img src={Logo} alt="" />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          </div>
         <div> 
            <Link to='/'>
            {/* <div className='bg-gray-100 selection:bg-red-500 active:bg-red-300 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block'>
              <MdOutlineDashboard size={20} className='m-auto'/>
              <p>Home</p>
            </div> */}


<div className='bg-gray-100 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
  <MdOutlineDashboard size={20} className='m-auto' />
  <p>Home</p>
</div>

          </Link>
          <Link to='/courses'>
            <div className='bg-gray-100 hover:bg-red-300  active:bg-red-300 w-11/12 hover.bg-gray-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
              <MdOutlineQueueMusic size={20} className='m-auto'/>
              <p>Courses</p>
            </div>
          </Link>
          </div>
        
        </div>

        <div className=''>  
            <Link to='/#'>
            <div className='bg-gray-100 selection:bg-red-500 active:bg-red-300 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
              <MdLogout size={20} className='m-auto'/>
              <p>Logout</p>
            </div>
          </Link>
          </div>

      </div>
</>

  );
};

export default Sidebar;
