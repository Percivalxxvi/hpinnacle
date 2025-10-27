import React from 'react'
import { useState } from 'react'
import "./Navmob.css"
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import logo2 from '../src/assets/logo2.png'


const Navmob = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex lg:hidden flex-col items-center justify-between bg-[#EDEDEDCC] w-full shadow-md border-b-3 border-[gold] fixed top-0 z-999">
      <div className="ham">
        <div className="navmob1-logo">
          <img
            src="https://ik.imagekit.io/percival26/schoollogo.png?updatedAt=1761578087139"
            alt=""
          />
        </div>
        <div className="ham1">
          <h1 className="text-[10px] mt-[30px]">Menu</h1>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#3e7742"
            label={"menu"}
            size={35}
            rounded
            duration={0.9}
          />
        </div>
      </div>
      <div
        className={`
                    navmob-pgs flex flex-col
                    
                    overflow-hidden
                    ${
                      isOpen === true
                        ? "max-h-96 opacity-100 transition-all duration-2500 ease-out"
                        : "max-h-0 opacity-0 transition-all duration-700 ease-out"
                    }
                `}
      >
        <Link to="/" className="navmob-pgs1">
          Home
        </Link>
        <Link to="/about" className="navmob-pgs1">
          About
        </Link>
        <Link to="/contact" className="navmob-pgs1">
          Contact
        </Link>
        <Link to="/news" className="navmob-pgs1">
          News
        </Link>
        <Link to="/events" className="navmob-pgs1">
          Events
        </Link>
      </div>
    </div>
  );
}

export default Navmob