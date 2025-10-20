import React from 'react'
import { useState } from 'react'
import "./Navmob.css"
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import logo2 from '../src/assets/logo2.png'


const Navmob = () => {
    const [isOpen, setOpen] = useState(false)
  return (
     <div className='flex lg:hidden flex-col items-center justify-between bg-[#EDEDEDCC] w-full shadow-md border-b-3 border-green-800 sticky top-0 z-50'>
        <div  className='ham'>   
        <div className='navmob1-logo'>
            <img src={logo2} alt="" />
        </div>
            <div className='ham1'>
                <h1 className='text-[10px] mt-[30px]'>Menu</h1>
                <Hamburger toggled={isOpen}
                 toggle={setOpen} 
                 color="#3e7742" 
                 label={"menu"}  
                 size={35}
                 rounded
                 duration={0.9} />
            </div>        
            
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