import React, { useState } from "react";
import './Contact.css'
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import Footer from '../components/Footer'
import Cnct from '../components/Cnct'

import mail from '../src/assets/mail.svg'
import phone from '../src/assets/phone.svg'
import mappin from '../src/assets/mappin.svg'

import Contactform from '../components/Contactform'
import Totop from "../components/Totop";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
  return (
    <div className="flex flex-col gap-2 bg-[#3e7742] border-2 border-[gold]">
      <Navmob />
      <Navpc page="contact" />
      <div className="flex lg:hidden h-20"></div>
      <div className="flex flex-col items-center justify-center bg-[#3e7742] lg:h-fit h-fit border-2 border-[gold]">
        <div className="flex flex-col items-center justify-center text-[gold] gap-5 lg:w-[80%] text-center mt-3 mb-3">
          <h1 className="text-4xl mt-1">Get in Touch with Us</h1>
          <div className="flex flex-col lg:ml-0 lg:mt-0 gap-4 lg:gap-8 lg:flex-row items-center pb-2">
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
                "Plot 5, Wonerland Community, Opp Redemption Camp, Estate 15, Ogun State"
              }
            />
            {/* <Cnct image={mail} txt={"Email"} txt2={"heroespinnacleschools@gmail.com"} /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[40vh] h-50 lg:flex-col bg-[#3e7742] items-center justify-center gap-5 lg:gap-10 border-2 border-[gold] p-9">
        <h3 className="text-4xl mt-2 text-[gold] text-center">
          Connect on Socials
        </h3>
        {/* <p className="text-gray-300 mb-8">
          Want to collaborate or chat? Reach out!
        </p> */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <a
            // href="https://x.com/thegreyline12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[gold] text-[gold] px-6 py-3 text-center h-10 w-30 rounded hover:border-2 hover:border-white transition hover:text-white active:bg-black active:text-white cursor-pointer"
          >
            Twitter/X
          </a>
          <a
            href="https://www.instagram.com/heroes.pinnacleschools?igsh=b3V1ZnhpZjFkcHhu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[gold] text-[gold] px-6 py-3 text-center h-10 w-30 rounded hover:border-2 hover:border-white transition hover:text-white active:bg-black active:text-white cursor-pointer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-col h-fit lg:flex-col bg-[#3e7742] border-2 border-[gold] items-center justify-center">
        <Contactform />
      </div>
      <Totop />
      <Footer />
    </div>
  );
}

export default Contact