import React from "react";
import "./Facilities.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import school2 from '../src/assets/school2.jpg'
import school3 from '../src/assets/school2.jpg'


const Facilities = () => {
    const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false
  };
  return (
    <div className="h-110 lg:h-150 pt-4 pb-4 pl-[5%] pr-[5%]">
        <Slider {...settings}>
            <div className="w-4/4 ">
              <div className="flex flex-col items-center justify-center gap-10 h-110 w-4/4 lg:h-150 lg:w-4/4">
                <h1 className="text-5xl text-black">Computer Lab</h1>
                <div className='lg:h-[80%] lg:w-[100%] flex items-center justify-center bg-amber-500'>             
                  <img className="h-4/4 lg:h-4/4 lg:w-4/4 object-cover" src={school3} alt="" />
              </div>
              </div>
            </div>
            <div className="w-4/4 ">
              <div className="flex flex-col items-center justify-center gap-10 h-110 w-4/4 lg:h-150 lg:w-4/4">
                <h1 className="text-5xl text-black">Science Lab</h1>
                <div className='lg:h-[80%] lg:w-[100%] flex items-center justify-center bg-amber-500'>             
                  <img className="h-4/4 lg:h-4/4 lg:w-4/4 object-cover" src={school3} alt="" />
              </div>
              </div>
            </div>
            <div className="w-4/4 ">
              <div className="flex flex-col items-center justify-center gap-10 h-110 w-4/4 lg:h-150 lg:w-4/4">
                <h1 className="text-5xl text-black">Library</h1>
                <div className='lg:h-[80%] lg:w-[100%] flex items-center justify-center bg-amber-500'>             
                  <img className="h-4/4 lg:h-4/4 lg:w-4/4 object-cover" src={school3} alt="" />
              </div>
              </div>
            </div>
            {/* <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-110 w-4/4 lg:h-150  md:w-4/4 bg-yellow-300 ">
                
              </div>
            </div> */}
        </Slider>
    </div>
  )
}

export default Facilities