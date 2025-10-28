import React, { useState } from 'react'
import './Cnct.css'


const Cnct = ({image,txt,txt2,txt3}) => {
    const [flip,setFlip]=useState(false)
  return (
    <div
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      className="cnct lg:flex-row flex-col h-70 justify-center lg:justify-start lg:pt-10"
    >
      <div className="h-fit w-fit bg-[gold]">
        <img className='h-25 w-25' src={image} alt="heroes pinnacle schools" />
      </div>
      <h2>{txt}</h2>
      <h1>{txt2}</h1>
      <h1 className='text-sm'>{txt3}</h1>
    </div>
  );
}

export default Cnct