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
    <div className="flex flex-col gap-2 bg-[#3e7742]">
      <Navmob />
      <Navpc page="contact" />
      <div className="flex lg:hidden h-20"></div>
      <div className="flex flex-col items-center justify-center bg-[#3e7742] lg:h-150 h-320 pt-5 border-2 border-[gold]">
        <div className="flex flex-col items-center justify-center text-[gold] gap-10 lg:w-[80%] text-center">
          <h1 className="text-4xl mt-5">Get in Touch with Us</h1>
          <div className="flex flex-col lg:ml-20 lg:mt-0 mt-10 gap-8 lg:flex-row items-center">
            <Cnct
              image={phone}
              txt={"Phone Number"}
              txt2={"07033502124"}
              txt3={"08121137637"}
            />
            <Cnct
              image={mappin}
              txt={"School Address"}
              txt2={
                "Plot 5, Abba Father Estate Phase 1, Opp Redemption Camp, Estate 15, Ogun State"
              }
            />
            <Cnct image={mail} txt={"Email"} txt2={"pinnacle@mail.com"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[40vh] h-50 lg:flex-col bg-[#3e7742] items-center justify-center gap-10 border-2 border-[gold] p-9">
        <h3 className="text-4xl mt-5 text-[gold]">Connect with us</h3>
        {/* <p className="text-gray-300 mb-8">
          Want to collaborate or chat? Reach out!
        </p> */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <a
            href="mailto:heroespinnacleschools@gmail.com"
            className="flex items-center justify-center border-2 border-[gold] text-[gold] px-6 py-3 text-center h-10 w-30 rounded hover:border-2 hover:border-white transition hover:text-white active:bg-black active:text-white"
          >
            Email Me
          </a>
          <a
            href="https://x.com/thegreyline12"
            className="flex items-center justify-center border-2 border-[gold] text-[gold] px-6 py-3 text-center h-10 w-30 rounded hover:border-2 hover:border-white transition hover:text-white active:bg-black active:text-white"
          >
            Twitter/X
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact