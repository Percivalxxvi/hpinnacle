import React from 'react'
import './Footer.css'
import { href } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer h-12 flex flex-col lg:flex-row items-center justify-center lg:gap-0 lg:justify-between lg:border-2 border-3 border-[gold] text-white bg-[#f0f0f0]">
      <h1 className="text-[#3e7742]">© {year} HEROES PINNACLE SCHOOLS.</h1>
      <p className="text-[#3e7742]">
        Powered by{" "}
        <a
          className="cursor-pointer font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href={"https://greylinex.vercel.app/"}
        >
          AOD Interactive
        </a>{" "}
      </p>
    </div>
  );
}

export default Footer