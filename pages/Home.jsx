import React,{ useState, useEffect } from 'react'
import "../src/App.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'
import Footer from '../components/Footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeslide from '../components/Homeslide'
import Facilities from '../components/Facilities'
import Totop from "../components/Totop";


const Home = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPjY2BmRH4G1Tu2kPScbhExHPNoVw6tO8FQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1hsT6DLYHtSRxBysrLfnUP1cM1eqsrbWzQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw_6IbimmhEjmSp1X3vOJfLFOo1fJhuOB3w&s",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay:true
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prev =>
  //       prev === images.length - 1 ? 0 : prev + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

    // const backgroundStyle = {
    //   background: `url(${images[currentIndex]})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center center',
    //   transition: 'background 0.5s ease-in-out',
    // };

  return (
    <div className="flex flex-col gap-2 bg-gray-300 border-2 border-[gold]">
      <Navmob />
      <div className="flex lg:hidden h-20"></div>
      <Navpc page="home" />
      <Homeslide />
      <div className="mobhero">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
          ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor.
          Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas
          at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur
          vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor
          libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor
          ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et
          ligula molestie rhoncus id in leo. Maecenas euismod mattis dapibus.
          Nullam at tortor non urna efficitur dignissim vel nec erat. Fusce
          rhoncus cursus eros vel blandit. Vestibulum sapien mi, condimentum sed
          odio at, condimentum imperdiet lorem. Vestibulum nec egestas leo, et
          ultrices elit. Sed pharetra eros non dui pretium, sit amet suscipit
          risus fermentum. Ut urna nibh, vulputate non mi vel, luctus venenatis
          libero. Maecenas interdum fermentum odio et ornare. Proin non iaculis
          lectus. Morbi a arcu risus. Duis convallis, urna eu scelerisque
          porttitor, ante nisi lobortis neque, quis aliquet tellus risus quis
          metus. Aliquam erat volutpat. In aliquam orci vel sapien iaculis
          placerat. Cras ac lorem urna.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center border-b-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center lg:justify-between w-[95%] lg:h-100 lg:mb-10">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold lg:mt-10">
            WHY CHOOSE HEROES PINNACLE SCHOOLS?
          </h1>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-justify">
            At Heroes Pinnacle Schools, we place emphasis on purposeful
            learning. This educational model offers your child numerous benefits
            for growth and development:
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Individual Attention{" "}
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Critical Thinking{"jdknd, "}
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Values and Character Development
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Strong sense of Community
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Improved Grades{" "}
          </p>
        </div>
        <div className="h-4/4 w-4/4 lg:w-2/4">
          <img src={school2} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center border-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center lg:justify-between w-[95%] lg:h-100">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold">
            OUR UNIQUE STYLE
          </h1>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            At Heroes Pinnacle Schools, we believe in a holistic approach to
            education.
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • God Factor - We have a mandate to raise Godly Seeds, Kindom Army,
            the Next True Heroes with the Spirit of Excellence
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Excellent Teachers
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Great Learning Tools
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Support Groups
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Exciting Learning Environment
          </p>
        </div>
        <div className="h-4/4 w-4/4 lg:w-2/4">
          <img src={school2} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:h-fit justify-center items-center border-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center w-[95%] lg:h-100">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold lg:mt-3.5">
            Academic Excellence!
          </h1>
          <p className="text-[18px] text-justify lg:w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
            ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor.
            Sed felis lorem, cursus vitae dictum vitae, ornare non felis.
            Maecenas at nulla id lacus rutrum dictum sit amet non nunc.
            Phasellus efficitur vulputate orci, vel dignissim risus viverra
            vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel
            arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu
            rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
            Maecenas euismod mattis dapibus. Nullam at tortor non urna efficitur
            dignissim vel nec erat. Fusce rhoncus cursus eros vel blandit.
            Vestibulum sapien mi, condimentum sed odio at, condimentum imperdiet
            lorem. Vestibulum nec egestas leo, et ultrices elit. Sed pharetra
            eros non dui pretium, sit amet suscipit risus fermentum. Ut urna
            nibh, vulputate non mi vel, luctus venenatis libero. Maecenas
            interdum fermentum odio et ornare. Proin non iaculis lectus. Morbi a
            arcu risus. Duis convallis, urna eu scelerisque porttitor, ante nisi
            lobortis neque, quis aliquet tellus risus quis metus. Aliquam erat
            volutpat. In aliquam orci vel sapien iaculis placerat. Cras ac lorem
            urna.
          </p>
        </div>

        <div className="h-4/4 w-4/4 lg:w-2/4">
          <img src={school2} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-[gold]">
        <div>
          <h1 className="text-4xl lg:text-5xl text-center font-semibold lg:mt-[20px] border-b-2 border-[gold]">
            OUR FACILITIES
          </h1>
        </div>
      </div>

      <div className="h-fit lg:h-150 border-b-2 border-t-2 border-[gold]">
        <Facilities />
      </div>
      <Totop />
      <Footer />
    </div>
  );
}

export default Home