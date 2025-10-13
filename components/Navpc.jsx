import React, { useState } from 'react'
import "../components/Navpc.css"
import { Link } from 'react-router-dom'
import logo2 from '../src/assets/logo2.png'

const Navpc = ({page}) => {
    const [menu,setMenu]=useState(false)
    const [menu1,setMenu1]=useState(false)
    const [menu2,setMenu2]=useState(false)
    const [menu3,setMenu3]=useState(false)
    const [menu4,setMenu4]=useState(false)
  return (
    <div className='navpc'>
        <div className='navpc-logo'>
            <img src={logo2} alt="" />
        </div>
        <div className='navpc-pgs'>
            <Link to={'/'} onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)} style={{backgroundColor:page==="home" ? "#3e7742" : "",color:page==="home" ? "#f0f0f0":"", transform:page!=="home" && menu===true ? 'scale(1.15)':'scale(1)'}} className='navpc-pgs1'>Home</Link>
            <Link to={'/about'} onMouseEnter={()=>setMenu1(true)} onMouseLeave={()=>setMenu1(false)} style={{backgroundColor:page==="about" ? "#3e7742" : "",color:page==="about" ? "#f0f0f0":"", transform:page!=="about" && menu1===true ? 'scale(1.15)':'scale(1)'}} className='navpc-pgs1'>About</Link>
            <Link to={'/contact'} onMouseEnter={()=>setMenu2(true)} onMouseLeave={()=>setMenu2(false)} style={{backgroundColor:page==="contact" ? "#3e7742" : "",color:page==="contact" ? "#f0f0f0":"", transform:page!=="contact" && menu2===true ? 'scale(1.15)':'scale(1)'}} className='navpc-pgs1'>Contact Us</Link>
            <Link to={'/news'} onMouseEnter={()=>setMenu3(true)} onMouseLeave={()=>setMenu3(false)} style={{backgroundColor:page==="news" ? "#3e7742" : "",color:page==="news" ? "#f0f0f0":"", transform:page!=="news" && menu3===true ? 'scale(1.15)':'scale(1)'}} className='navpc-pgs1'>News</Link>
            <Link to={'/news'} onMouseEnter={()=>setMenu4(true)} onMouseLeave={()=>setMenu4(false)} style={{backgroundColor:page==="events" ? "#3e7742" : "",color:page==="events" ? "#f0f0f0":"", transform:page!=="events" && menu4===true ? 'scale(1.15)':'scale(1)'}} className='navpc-pgs1'>Events</Link>
            <Link className='navpc-pgs1'>????????????</Link>
        </div>
       
    </div>
  )
}

export default Navpc