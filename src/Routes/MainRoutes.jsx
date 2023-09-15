import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Overview from '../Pages/Overview'
import Login from '../Pages/Login'
import Courses from '../Pages/Courses'
import { Navigate } from 'react-router-dom'

const MainRoutes = () => {
  const token = localStorage.getItem("token")
  return (
    <div className='m-auto' >
      <Routes>
        <Route path='/'  element={token?<Overview/>:<Navigate to="/login" replace={true} />}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/courses'  element={<Courses/>}  />
      </Routes>
    </div>
  )
}

export default MainRoutes
