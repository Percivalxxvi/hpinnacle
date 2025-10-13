import React, { useState } from 'react'
import './Cnct.css'


const Cnct = ({image,txt,txt2,txt3}) => {
    const [flip,setFlip]=useState(false)
  return (
    <div 
    onMouseEnter={()=>setFlip(true)} 
    onMouseLeave={()=>setFlip(false)}
    style={{cursor:flip===true ? 'pointer':''}} className='cnct'>
        <div className='cnct-icon'>
            <img style={{transform:flip===true ? 'scale(1.15)': '', transition:flip===true ? 'ease-in-out 0.4s':'ease-in-out 0.4s'}} src={image} alt="" />
        </div>
        <h2>{txt}</h2>
        <h1>{txt2}</h1>
        <h1>{txt3}</h1>
    </div>
  )
}

export default Cnct