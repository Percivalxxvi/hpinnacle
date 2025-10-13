import React from 'react'
import './Events.css'
import Navmob from '../components/Navmob'
import Navpc from '../components/Navpc'

const Events = () => {
  return (
    <div>
        <div  className='navmob1'>
        <Navmob/>
      </div>
      <Navpc page="events"/>
      <div className='sec1'>

      </div>
      <div className='events'>        
          <div className='events2'>
              <h1>STAY TUNED FOR EVENTS</h1>
          </div>
      </div>
    </div>
  )
}

export default Events