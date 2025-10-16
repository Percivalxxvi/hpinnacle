import React from 'react'
import { useState } from 'react'
import "./Navmob.css"
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import logo2 from '../src/assets/logo2.png'


const Navmob = () => {
    const [isOpen, setOpen] = useState(false)
  return (
     <div className='navmob'>
        <div  className='ham'>   
        <div className='navmob1-logo'>
            <img src={logo2} alt="" />
        </div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div  style={{display:isOpen ? "flex":"none"}} className='navmob-pgs'>
            <Link to={'/'} className='navmob-pgs1'>Home</Link>
            <Link to={'/about'} className='navmob-pgs1'>About Us</Link>
            <Link to={'/contact'} className='navmob-pgs1'>Contact Us</Link>
            <Link to={'/news'} className='navmob-pgs1'>News</Link>
            <Link to={'/events'} className='navmob-pgs1'>Events</Link>
            {/* <Link className='navmob-pgs1'>????????????</Link> */}
        </div>       
    </div>
  )
}

export default Navmob