import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="maincontainer">
    <Sidebar/>
      <div className="maindisplay">
        <Navbar/>
        <Homepage/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
