import React, { useState } from 'react'
import './Cnct.css'


const Cnct = ({image,txt,txt2,txt3}) => {
    const [flip,setFlip]=useState(false)
  return (
    <div 
    onMouseEnter={()=>setFlip(true)} 
    onMouseLeave={()=>setFlip(false)}
     className='cnct'>
        <div className='cnct-icon'>
            <img src={image} alt="" />
        </div>
        <h2>{txt}</h2>
        <h1>{txt2}</h1>
        <h1>{txt3}</h1>
    </div>
  )
}

export default Cnct