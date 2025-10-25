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
    <div className="h-[30vh] md:h-[80vh] lg:h-[65vh] 2xl:[55vh]">
      <div className="h-[30vh] md:h-[70%]">
        <Slider {...settings}>
          <div>
            <div
              style={{
                background: `url('https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="flex items-center justify-center h-[30vh] bg-red-600 w-[100%] md:h-[80vh] lg:h-[65vh] 2xl:[45vh]"
            >
              <div
                style={{
                  backgroundColor: "rgba(23, 0, 0, 0.5)",
                  justifyItems: "center",
                  alignContent: "center",
                }}
                className="h-[100%] w-[100%]"
              >
                <h1 className="text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer">
                  {" "}
                  <TypewriterLoop
                    words={["HEROES PINNACLE SCHOOLS"]}
                    typingSpeed={100}
                    deletingSpeed={20}
                    delay={2000}
                  />
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: `url("https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="flex items-center justify-center h-[30vh] bg-blue-600 w-[100%] md:h-[80vh] lg:h-[65vh] 2xl:[45vh]"
            >
              <div
                style={{
                  backgroundColor: "rgba(23, 0, 0, 0.5)",
                  justifyItems: "center",
                  alignContent: "center",
                }}
                className="h-[100%] w-[100%]"
              >
                <h1 className="text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer">
                  HEROES PINNACLE SCHOOLS
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: `url("https://images.unsplash.com/photo-1610962381137-50ef93055125?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="flex items-center justify-center h-[30vh] bg-yellow-300 w-[100%] md:h-[80vh] lg:h-[65vh] 2xl:[45vh]"
            >
              <div
                style={{
                  backgroundColor: "rgba(23, 0, 0, 0.5)",
                  justifyItems: "center",
                  alignContent: "center",
                }}
                className="h-[100%] w-[100%]"
              >
                <h1 className="text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer">
                  <TypewriterLoop
                    words={["HEROES PINNACLE SCHOOLS"]}
                    typingSpeed={100}
                    deletingSpeed={20}
                    delay={5000}
                  />
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: `url("https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="flex items-center justify-center h-[30vh] bg-blue-600 w-[100%] md:h-[80vh] lg:h-[65vh] 2xl:[45vh]"
            >
              <div
                style={{
                  backgroundColor: "rgba(23, 0, 0, 0.5)",
                  justifyItems: "center",
                  alignContent: "center",
                }}
                className="h-[100%] w-[100%]"
              >
                <h1 className="text-4xl md:text-8xl lg:text-6xl md:w-[60%] font-bold text-white text-center hover:scale-103 cursor-pointer">
                  HEROES PINNACLE SCHOOLS
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Homeslide