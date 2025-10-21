import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-0 lg:justify-between bg-[#3e7742] text-white'>
        <h1>© 2025 HEROES PINNACLE SCHOOLS.</h1>
        <p>Powered by <span>Grey Line Solutions</span> </p>
    </div>
  )
}

export default Footer