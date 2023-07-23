import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import NewsPage from '../components/NewsPage'
import "./App.css"

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="maincontainer">
    <Sidebar/>
      <div className="maindisplay">
        <Navbar/>
          <Routes>

            <Route path='/moonfang/' element={<Homepage/>} />
            <Route path='/gamenews' element={<NewsPage/>} />  

          </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
