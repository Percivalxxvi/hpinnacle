import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Fade.css'
// import { baseUrl } from "./config";


const Fade = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div style={{width:'80%', backgroundColor:'cyan'}}>
      <Slider {...settings}>
        <div>
          <img src="../src/assets/school1.jpg" />
        </div>
        <div>
          <img src="../src/assets/school2.jpg" />
        </div>
        <div>
          <img src="../src/assets/library.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
