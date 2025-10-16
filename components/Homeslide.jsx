import React from 'react'
import './Homeslide.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import library from '../src/assets/library.jpg'
import classkids from '../src/assets/classkids.jpg'

const Homeslide = () => {
     const settings = {
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className=''>
        <div className="h-[30vh] md:h-[85vh]">
      <Slider {...settings}>
        <div>
            <div style={{background:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1hsT6DLYHtSRxBysrLfnUP1cM1eqsrbWzQ&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-red-600 w-[100%] md:h-[85vh]">
                <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl md:w-[60%] font-bold text-white text-center'>HEROES PINNACLE SCHOOLS</h1>
                </div>
            </div>
        </div>
        <div>
            <div style={{background:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPjY2BmRH4G1Tu2kPScbhExHPNoVw6tO8FQ&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-blue-600 w-[100%] md:h-[85vh]">
            <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl md:w-[60%] font-bold text-white text-center'>HEROES PINNACLE SCHOOLS</h1>
                </div>
            </div>
        </div>
        <div>
            <div style={{background:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw_6IbimmhEjmSp1X3vOJfLFOo1fJhuOB3w&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-yellow-300 w-[100%] md:h-[85vh]">
            <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl md:w-[60%] font-bold text-white text-center'>HEROES PINNACLE SCHOOLS</h1>
                </div>
            </div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Homeslide