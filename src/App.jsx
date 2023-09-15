import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card"
import Sidebar from './Components/Sidebar'
import MainRoutes from './Routes/MainRoutes'
import Table from './Components/Table'
import Login from './Pages/Login'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex   bg-gray-200 ">
      <Sidebar />
      <MainRoutes/>
      {/* <Login/> */}
    </div>
  )
}

export default App
