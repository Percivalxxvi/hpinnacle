// import React, { useState } from 'react'
// import "../components/Navpc.css"
// import { Link } from 'react-router-dom'
// import logo2 from '../src/assets/logo2.png'

// const Navpc = ({page}) => {
//     const [menu,setMenu]=useState(false)
//     const [menu1,setMenu1]=useState(false)
//     const [menu2,setMenu2]=useState(false)
//     const [menu3,setMenu3]=useState(false)
//     const [menu4,setMenu4]=useState(false)
//   return (
//     <div className='navpc'>
//         <div className='navpc-logo'>
//             <img src={logo2} alt="" />
//         </div>
//         <div className='navpc-pgs'>
//             <Link to={'/'} onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)} style={{backgroundColor:page==="home" ? "#3e7742" : "",color:page==="home" ? "#f0f0f0":"", boxShadow:page!=="home" && menu===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='navpc-pgs1'>Home</Link>
//             <Link to={'/about'} onMouseEnter={()=>setMenu1(true)} onMouseLeave={()=>setMenu1(false)} style={{backgroundColor:page==="about" ? "#3e7742" : "",color:page==="about" ? "#f0f0f0":"", boxShadow:page!=="about" && menu1===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='navpc-pgs1'>About</Link>
//             <Link to={'/contact'} onMouseEnter={()=>setMenu2(true)} onMouseLeave={()=>setMenu2(false)} style={{backgroundColor:page==="contact" ? "#3e7742" : "",color:page==="contact" ? "#f0f0f0":"", boxShadow:page!=="contact" && menu2===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='navpc-pgs1'>Contact Us</Link>
//             <Link to={'/news'} onMouseEnter={()=>setMenu3(true)} onMouseLeave={()=>setMenu3(false)} style={{backgroundColor:page==="news" ? "#3e7742" : "",color:page==="news" ? "#f0f0f0":"", boxShadow:page!=="news" && menu3===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='navpc-pgs1'>News</Link>
//             <Link to={'/events'} onMouseEnter={()=>setMenu4(true)} onMouseLeave={()=>setMenu4(false)} style={{backgroundColor:page==="events" ? "#3e7742" : "",color:page==="events" ? "#f0f0f0":"", boxShadow:page!=="events" && menu4===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='navpc-pgs1'>Events</Link>
//             {/* <Link className='navpc-pgs1'>????????????</Link> */}
//         </div>
       
//     </div>
//   )
// }

// export default Navpc

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
    <div className='hidden lg:flex h-35 items-center justify-center gap-50 px-10 md:px-20 lg:px-32 py-4 sticky top-0 z-50 bg-[#EDEDEDCC] shadow-md border-b-3 border-green-800'>
        <div className='flex items-center justify-center h-35 w-28 md:h-16 md:w-36 lg:h-4/4 lg:w-44'>
            <img className='h-4/4 w-4/4 object-cover' src={logo2} alt="" />
        </div>
        <div className='flex items-center justify-center gap-6 md:gap-10 lg:gap-16 pr-40'>
            <Link to={'/'} onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)} style={{backgroundColor:page==="home" ? "#3e7742" : "",padding: page==="home"? "5px 0 5px 0":"", color:page==="home" ? "#f0f0f0":"", boxShadow:page!=="home" && menu===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='no-underline text-3xl text-black font-bold p-3 duration-300'>Home</Link>
            <Link to={'/about'} onMouseEnter={()=>setMenu1(true)} onMouseLeave={()=>setMenu1(false)} style={{backgroundColor:page==="about" ? "#3e7742" : "",padding: page==="about"? "5px 0 5px 0":"",color:page==="about" ? "#f0f0f0":"", boxShadow:page!=="about" && menu1===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='no-underline text-3xl text-black font-bold p-3 duration-300 '>About</Link>
            <Link to={'/contact'} onMouseEnter={()=>setMenu2(true)} onMouseLeave={()=>setMenu2(false)} style={{backgroundColor:page==="contact" ? "#3e7742" : "",padding: page==="contact"? "5px 0 5px 0":"",color:page==="contact" ? "#f0f0f0":"", boxShadow:page!=="contact" && menu2===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='no-underline text-3xl text-black font-bold p-3 duration-300 '>Contact</Link>
            <Link to={'/news'} onMouseEnter={()=>setMenu3(true)} onMouseLeave={()=>setMenu3(false)} style={{backgroundColor:page==="news" ? "#3e7742" : "",padding: page==="news"? "5px 0 5px 0":"",color:page==="news" ? "#f0f0f0":"", boxShadow:page!=="news" && menu3===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='no-underline text-3xl text-black font-bold p-3 duration-300 '>News</Link>
            <Link to={'/events'} onMouseEnter={()=>setMenu4(true)} onMouseLeave={()=>setMenu4(false)} style={{backgroundColor:page==="events" ? "#3e7742" : "",padding: page==="events"? "5px 0 5px 0":"",color:page==="events" ? "#f0f0f0":"", boxShadow:page!=="events" && menu4===true ? '0 5px 1px #3e7742':'0 0 0 black'}} className='no-underline text-3xl text-black font-bold p-3 duration-300 '>Events</Link>
            {/* <Link className='navpc-pgs1'>????????????</Link> */}
        </div>
       
    </div>
  )
}

export default Navpc