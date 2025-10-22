import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer h-12 flex flex-collg: lg:flex-row items-center justify-center lg:gap-0 lg:justify-between lg:border-2 border-3 border-[gold] text-white">
      <h1 className="text-[#3e7742]">© 2025 HEROES PINNACLE SCHOOLS.</h1>
      <p className="text-[#3e7742]">
        Powered by <span>GreyLine Solutions</span>{" "}
      </p>
    </div>
  );
}

export default Footer