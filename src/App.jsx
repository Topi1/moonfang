import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import NewsPage from '../components/NewsPage'
import BaldursSite from '../components/BaldursSite'
import DiabloSite from '../components/DiabloSite'
import Diablo2Site from '../components/Diablo2Site'
import EldenSite from '../components/EldenSite'
import ForumsSite from '../components/ForumsSite'
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
            <Route path='/baldursgate3' element={<BaldursSite/>} />    
            <Route path='/diablo4' element={<DiabloSite/>} /> 
            <Route path='/diablo2' element={<Diablo2Site/>} />
            <Route path='/eldenring' element={<EldenSite/>} />
            <Route path='/forums' element={<ForumsSite/>} />        

          </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
