import React from 'react'
import './Homeslide.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import library from '../src/assets/library.jpg'
import classkids from '../src/assets/classkids.jpg'
import TypewriterLoop from '../components/Typewriterhome'

const Homeslide = () => {
     const settings = {
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 670,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false
  };
  return (
    <div className='h-[30vh] md:h-[80vh] lg:h-[30vh] 2xl:[45vh]'>
        <div className="h-[30vh] md:h-[70%]">
      <Slider {...settings}>
        <div>
            <div style={{background:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1hsT6DLYHtSRxBysrLfnUP1cM1eqsrbWzQ&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-red-600 w-[100%] md:h-[80vh] lg:h-[30vh] 2xl:[45vh]">
                <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer'> <TypewriterLoop words={['HEROES PINNACLE SCHOOLS']}
        typingSpeed={100}
        deletingSpeed={20}
        delay={2000}/></h1>
                </div>
            </div>
        </div>
        <div>
            <div style={{background:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPjY2BmRH4G1Tu2kPScbhExHPNoVw6tO8FQ&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-blue-600 w-[100%] md:h-[80vh] lg:h-[30vh] 2xl:[45vh]">
            <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer'>HEROES PINNACLE SCHOOLS</h1>
                </div>
            </div>
        </div>
        <div>
            <div style={{background:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw_6IbimmhEjmSp1X3vOJfLFOo1fJhuOB3w&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-yellow-300 w-[100%] md:h-[80vh] lg:h-[30vh] 2xl:[45vh]">
            <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer'><TypewriterLoop words={['HEROES PINNACLE SCHOOLS']}
        typingSpeed={100}
        deletingSpeed={20}
        delay={5000}/></h1>
                </div>
            </div>
        </div>
        <div>
            <div style={{background:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPjY2BmRH4G1Tu2kPScbhExHPNoVw6tO8FQ&s")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}} className="flex items-center justify-center h-[30vh] bg-blue-600 w-[100%] md:h-[80vh] lg:h-[30vh] 2xl:[45vh]">
            <div style={{backgroundColor:('rgba(23, 0, 0, 0.5)'),justifyItems:'center', alignContent:'center' }} className='h-[100%] w-[100%]'>
                    <h1 className='text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer'>HEROES PINNACLE SCHOOLS</h1>
                </div>
            </div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Homeslide