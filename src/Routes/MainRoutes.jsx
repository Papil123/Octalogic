import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Overview from '../Pages/Overview'
import Login from '../Pages/Login'
import Courses from '../Pages/Courses'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Overview/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/courses'  element={<Courses/>}  />
      </Routes>
    </div>
  )
}

export default MainRoutes
