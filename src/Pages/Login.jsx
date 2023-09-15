import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"



const Login = () => {
 const [username,setUsername] =useState("eve.holt@reqres.in")
 const [password ,setPassword] =useState("cityslicka")
const navigate  = useNavigate()

const login  = ()=>{
  // 
  
  axios.post("https://reqres.in/api/login",
  {
    "email": username,
    "password": password
}
  ).then((res)=>{
     console.log(res.data)
     localStorage.setItem("token" , res.data.token);
     navigate("/")
  })
}

  return (
    <div className="m-auto min-h-screen flex items-center justify-center border ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>{
                login()
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
