import React from 'react'
import './Contact.css'
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import Footer from '../components/Footer'
import Cnct from '../components/Cnct'

import mail from '../src/assets/mail.svg'
import phone from '../src/assets/phone.svg'
import mappin from '../src/assets/mappin.svg'

import { Mail } from 'lucide-react'
import { Hotel } from 'lucide-react'

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
            <div className='cnt1'>
                <h1>Get in Touch with Us</h1>
                <div className='cnt1a'>
                    <Cnct image={phone}
                    txt={'Phone Number'}
                    txt2={'07033502124'}
                     />
                    <Cnct image={mappin}
                    txt={'School Address'}
                    txt2={''}/>
                    <Cnct image={mail}
                    txt={'Email'}
                    txt2={'07033502124'}/>
                </div>
                {/* <Hotel size={64}/> */}
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact