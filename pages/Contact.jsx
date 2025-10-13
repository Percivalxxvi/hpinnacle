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
                    txt3={'08121137637'}
                     />
                    <Cnct image={mappin}
                    txt={'School Address'}
                    txt2={'Plot 5, Abba Father Estate Phase 1, Opp Redemption Camp, Estate 15, Ogun State'}/>
                    <Cnct image={mail}
                    txt={'Email'}
                    txt2={'pinnacle@mail.com'}/>
                </div>
            </div>
      </div>
      <div className='cnt2'>

      </div>
      <Footer/>
    </div>
  )
}

export default Contact