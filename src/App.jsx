import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import News from '../pages/News.jsx'
import Events from '../pages/Events.jsx'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='events' element={<Events/>}/>
        </Routes>
      </Router>
  )
}

export default App