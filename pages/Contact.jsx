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
        <Navmob/>
      <Navpc page="contact"/>
      <div className='flex lg:hidden h-20'>
          
      </div>
      <div className='flex flex-col items-center justify-center bg-[#3e7742] lg:h-screen pt-5'>
            <div className='flex flex-col items-center justify-center text-white gap-10 lg:w-[80%]'>
                <h1 className='text-4xl mt-5'>Get in Touch with Us</h1>
                <div className='flex flex-col lg:ml-20 lg:mt-0 mt-10 gap-8 lg:flex-row items-center'>
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
      {/* <div className='cnt2'>

      </div> */}
      <Footer/>
    </div>
  )
}

export default Contact