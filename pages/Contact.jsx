import React, { useState } from "react";
import "./Contact.css";
import Navpc from "../components/Navpc";
import Navmob from "../components/Navmob";
import Footer from "../components/Footer";
import Cnct from "../components/Cnct";
import Contactform from "../components/Contactform";
import Totop from "../components/Totop";
import phone from "../src/assets/phone.svg";
import mappin from "../src/assets/mappin.svg";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-300 border-2 border-[gold]">
      <Navmob />
      <Navpc page="contact" />
      <div className="flex lg:hidden h-15"></div>
      <div className="flex flex-col items-center justify-center bg-[#f0f0f0] lg:h-fit h-fit border-2 border-[gold]">
        <div className="flex flex-col items-center justify-center text-black gap-5 lg:w-[80%] text-center mt-3 mb-3">
          <h1 className="text-4xl mt-1">Get in Touch with Us</h1>
          <div className="flex flex-col lg:ml-0 lg:mt-0 gap-4 lg:gap-8 lg:flex-row items-center pb-2 blur-bg">
            <Cnct
              Icon={FaPhoneAlt}
              txt="Phone Number"
              txt2="07033502124"
              txt3="08121137637"
            />

            <Cnct
              Icon={FaMapMarkerAlt}
              txt="School Address"
              txt2="Plot 5, Wonderland Community, Opp Redemption Camp, Estate 15, Ogun State"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[40vh] h-fit lg:flex-col bg-gray-100 items-center justify-center gap-5 lg:gap-10 border-2 border-[gold] p-2">
        <h3 className="text-4xl mt-2 text-black text-center">
          Connect on Socials
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5 w-full px-6">
          {[
            {
              icon: FaTwitter,
              label: "Twitter",
              link: "https://x.com/HeroesPinnacle",
            },
            {
              icon: FaInstagram,
              label: "Instagram",
              link: "https://www.instagram.com/heroes.pinnacleschools?igsh=b3V1ZnhpZjFkcHhu",
            },
          ].map(({ icon: Icon, label, link }, index) => (
            <a
              key={index}
              // whileHover={{ scale: 1.05, y: -4 }}
              // whileTap={{ scale: 0.96 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-23 w-37 lg:w-40 bg-[#f0f0f0] hover:bg-[#3e7742] border border-black text-[#3e7742] hover:text-white active:text-white active:bg-[#3e7742] font-semibold text-xl rounded-xl flex flex-col justify-center items-center gap-1 py-2 transition"
            >
              <Icon size={30} />
              {label}
            </a>
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-3 justify-center items-center">
          <a
            href="https://x.com/HeroesPinnacle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border-2 border-[#3e7742] text-[#3e7742] px-6 py-3 text-center w-30 rounded hover:border-2 hover:border-black transition hover:text-black active:bg-black active:text-white cursor-pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter Logo"
              width="30"
            ></img>
            Twitter/X
          </a>
          <a
            href="https://www.instagram.com/heroes.pinnacleschools?igsh=b3V1ZnhpZjFkcHhu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border-2 border-[#3e7742] text-[#3e7742] px-6 py-3 text-center w-30 rounded hover:border-2 hover:border-black transition hover:text-black active:bg-black active:text-white cursor-pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram Logo"
              width="30"
            ></img>
            Instagram
          </a>
        </div> */}
      </div>

      <div className="flex flex-col h-fit lg:flex-col bg-[#f0f0f0] border-2 border-[gold] items-center justify-center">
        <Contactform />
      </div>
      <Totop />
      <Footer />
    </div>
  );
};

export default Contact;
