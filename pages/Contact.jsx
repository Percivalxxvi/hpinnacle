import React from 'react'
import './Contact.css'
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <div  className='navmob1'>
          <Navmob/>
      </div>
      <Navpc page="contact"/>
      <div className='sec1'>

      </div>
      <div className='contact1'>
            <div>

            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact