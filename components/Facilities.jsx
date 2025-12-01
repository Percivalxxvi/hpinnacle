import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Facilities = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="h-fit lg:h-150 pt-4 pb-4">
      <Slider {...settings}>
        <div className="w-4/4 ">
          <div className="flex flex-col items-center justify-between h-60 w-4/4 lg:h-150 lg:w-4/4">
            <h1 className="lg:text-5xl text-3xl text-black h-[10%]">
              Computer Lab
            </h1>
            <div className="lg:h-[90%] lg:w-[100%] h-[80%] w-90 flex items-center justify-center">
              <img
                className="h-4/4 lg:h-4/4 lg:w-4/4 w-[100%] lg:object-contain object-cover"
                src="https://ik.imagekit.io/percival26/IMG-20251122-WA0074_1_.jpg?updatedAt=1763803417978"
                alt="heroes pinnacle schools"
              />
            </div>
          </div>
        </div>

        <div className="w-4/4 ">
          <div className="flex flex-col items-center justify-between h-60 w-4/4 lg:h-150 lg:w-4/4">
            <h1 className="lg:text-5xl text-3xl text-black h-[10%]">
              Science Lab
            </h1>
            <div className="lg:h-[90%] lg:w-[100%] h-[80%] w-90 flex items-center justify-center">
              <img
                className="h-[100%] lg:h-4/4 lg:w-4/4 w-[100%] lg:object-contain object-cover"
                src="https://ik.imagekit.io/percival26/laboratory%20(1).jpg?updatedAt=1763802829960"
                alt="heroes pinnacle schools"
              />
            </div>
          </div>
        </div>

        <div className="w-4/4 ">
          <div className="flex flex-col items-center justify-between h-60 w-4/4 lg:h-150 lg:w-4/4">
            <h1 className="lg:text-5xl text-3xl text-black h-[10%]">Library</h1>
            <div className="lg:h-[90%] lg:w-[100%] h-[80%] w-90 flex items-center justify-center">
              <img
                className="h-4/4 lg:h-4/4 lg:w-4/4 w-[100%] lg:object-contain object-cover"
                src="https://images.unsplash.com/photo-1623078424463-473cf34e3ecf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                alt="heroes pinnacle schools"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Facilities;
