import React, { useState } from 'react'
import "../components/Navpc.css"
import { Link } from 'react-router-dom'

const Navpc = ({page}) => {
    const [menu,setMenu]=useState(false)
    const [menu1,setMenu1]=useState(false)
    const [menu2,setMenu2]=useState(false)
    const [menu3,setMenu3]=useState(false)
    const [menu4, setMenu4] = useState(false)
    const [menu5, setMenu5] = useState(false);
  return (
    <div className="hidden lg:flex h-18 items-center justify-between px-10 md:px-20 lg:px-32 py-4 sticky top-0 z-50 bg-[#EDEDEDCC] shadow-md border-b-3 border-[gold]">
      <div className="flex items-center justify-center h-25 w-100">
        <div className="flex items-center justify-center h-4/4 w-28 md:h-16 md:w-36 lg:h-4/4 lg:w-38 p-3 rounded-md">
          <img
            onClick={() => window.location.href = "/"}
            className="h-4/4 w-4/4 object-contain cursor-pointer"
            src="https://ik.imagekit.io/percival26/schoollogo.png?updatedAt=1761578087139"
            alt="heroes pinnacle schools"
          />
        </div>
        <h1 className="text-[#3e7742] text-2xl pr-25 leading-6.5">
          Heroes Pinnacle Schools
        </h1>
      </div>

      <div className="flex items-center justify-between gap-5 md:gap-10 lg:gap-6 pr-10">
        <Link
          to={"/"}
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          style={{
            color: page === "home" ? "gold" : "",
            boxShadow:
              page !== "home" && menu === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          onMouseEnter={() => setMenu1(true)}
          onMouseLeave={() => setMenu1(false)}
          style={{
            color: page === "about" ? "gold" : "",
            boxShadow:
              page !== "about" && menu1 === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300 "
        >
          About
        </Link>
        <Link
          to={"/contact"}
          onMouseEnter={() => setMenu2(true)}
          onMouseLeave={() => setMenu2(false)}
          style={{
            color: page === "contact" ? "gold" : "",
            boxShadow:
              page !== "contact" && menu2 === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300 "
        >
          Contact
        </Link>
        <Link
          to={"/events"}
          onMouseEnter={() => setMenu3(true)}
          onMouseLeave={() => setMenu3(false)}
          style={{
            color: page === "events" ? "gold" : "",
            boxShadow:
              page !== "events" && menu3 === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300 "
        >
          Events
        </Link>
        <Link
          to={"/news"}
          onMouseEnter={() => setMenu4(true)}
          onMouseLeave={() => setMenu4(false)}
          style={{
            color: page === "news" ? "gold" : "",
            boxShadow:
              page !== "news" && menu4 === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300 "
        >
          News
        </Link>
        <Link
          to={"/gallery"}
          onMouseEnter={() => setMenu5(true)}
          onMouseLeave={() => setMenu5(false)}
          style={{
            color: page === "gallery" ? "gold" : "",
            boxShadow:
              page !== "gallery" && menu5 === true
                ? "0 5px 0 #3e7742"
                : "0 0 0 black",
          }}
          className="no-underline text-2xl text-[#3e7742] font-bold py-3 duration-300 "
        >
          Gallery
        </Link>
      </div>
    </div>
  );
}

export default Navpc