import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card"
import Sidebar from './Components/Sidebar'
import MainRoutes from './Routes/MainRoutes'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-full flex ">
      <Sidebar />
      <MainRoutes/>
      {/* Main content goes here */}
    </div>
  )
}

export default App
