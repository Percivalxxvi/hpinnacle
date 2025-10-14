import React,{ useState, useEffect } from 'react'
import "../src/App.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'
import school3 from '../src/assets/school2.jpg'
import Footer from '../components/Footer'
import FadeSlider from '../components/FadeSlider'
import Fade from '../components/Fade'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div>
      <div className='navmob1'>
        <Navmob/>
      </div>
      <Navpc page="home"/>
      <div className='sec1'>

      </div>
      <div //hero slideshow
      // style={{background:`url(${images[currentIndex]})`,
      //             height: '100vh',
      //             width: '100%',
      //             backgroundSize: 'cover',
      //             backgroundRepeat: 'no-repeat',
      //             backgroundPosition: 'center center',
      //             transition: '0.5s',}} 
                  className='hero'>
                    {/* <FadeSlider/> */}
                    {/* <Fade/> */}
                           <div style={{width:'100%', backgroundColor:'cyan',zIndex:'1', position:'relative',height:'0px'}}>
      <Slider {...settings}>
        <div style={{height:'30%', width:'100%', backgroundColor:'blue'}} >
          <img style={{height:'80%', width:'100%',objectFit:'contain'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPjY2BmRH4G1Tu2kPScbhExHPNoVw6tO8FQ&s" />
        </div>
        <div style={{height:'30%', width:'100%', backgroundColor:'blue'}}>
          <img style={{height:'80%', width:'100%',objectFit:'contain'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1hsT6DLYHtSRxBysrLfnUP1cM1eqsrbWzQ&s" />
        </div>
        <div style={{height:'30%', width:'100%', backgroundColor:'blue'}}>
          <img style={{height:'80%', width:'100%',objectFit:'contain'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw_6IbimmhEjmSp1X3vOJfLFOo1fJhuOB3w&s" />
        </div>
      </Slider>
    </div> 
        <div className='hero1'>
  
            <h1>HEROES PINNACLE SCHOOLS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.

              Maecenas euismod mattis dapibus. Nullam at tortor non urna efficitur dignissim vel nec erat. Fusce rhoncus cursus eros vel blandit. Vestibulum sapien mi, condimentum sed odio at, condimentum imperdiet lorem. Vestibulum nec egestas leo, et ultrices elit. Sed pharetra eros non dui pretium, sit amet suscipit risus fermentum. Ut urna nibh, vulputate non mi vel, luctus venenatis libero. Maecenas interdum fermentum odio et ornare. Proin non iaculis lectus. Morbi a arcu risus. Duis convallis, urna eu scelerisque porttitor, ante nisi lobortis neque, quis aliquet tellus risus quis metus. Aliquam erat volutpat. In aliquam orci vel sapien iaculis placerat. Cras ac lorem urna.
            </p>
        </div>
      </div>
      <div className='mobhero'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.

              Maecenas euismod mattis dapibus. Nullam at tortor non urna efficitur dignissim vel nec erat. Fusce rhoncus cursus eros vel blandit. Vestibulum sapien mi, condimentum sed odio at, condimentum imperdiet lorem. Vestibulum nec egestas leo, et ultrices elit. Sed pharetra eros non dui pretium, sit amet suscipit risus fermentum. Ut urna nibh, vulputate non mi vel, luctus venenatis libero. Maecenas interdum fermentum odio et ornare. Proin non iaculis lectus. Morbi a arcu risus. Duis convallis, urna eu scelerisque porttitor, ante nisi lobortis neque, quis aliquet tellus risus quis metus. Aliquam erat volutpat. In aliquam orci vel sapien iaculis placerat. Cras ac lorem urna.
            </p>
        </div>
      <div className='sec2'>
          <div className='sec2-txt'>
              <h1>WHY CHOOSE HEROES ?</h1>
              <p>
                At Heroes International Academy, we place emphasis on purposeful learning. This educational model offers your child numerous benefits for growth and development:
              </p>
              <p>• Individual Attention </p>
              <p>• Critical Thinking </p>
              <p>• Values and Character Development</p>
              <p>• Strong sense of Community</p>
              <p>• Improved Grades </p>
          </div>
          <div className='sec2-img'>
              <img src={school2} alt="" />
          </div>
      </div>
      <div className='sec3'>
            <div className='sec3-txt'>
              <h1>OUR UNIQUE STYLE</h1>
              <p>
                • God Factor - We have a mandate to raise Godly Seeds, Kindom Army, the Next True Heroes with the Spirit of Excellent
              </p>
              <p>
                • Excellent Teachers
              </p>
              <p>
                • Great Learning Tools
              </p>
              <p>
                • Support Groups
              </p>
              <p>
                • Exciting Learning Environment
              </p>
          </div>
          <div className='sec3-img'>
              <img src={school2} alt="" />
          </div>
      </div>
      <div className='sec4'>
          <div className='sec4-txt'>
              <h1>Academic Excellence!</h1>
                      <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.

              Maecenas euismod mattis dapibus. Nullam at tortor non urna efficitur dignissim vel nec erat. Fusce rhoncus cursus eros vel blandit. Vestibulum sapien mi, condimentum sed odio at, condimentum imperdiet lorem. Vestibulum nec egestas leo, et ultrices elit. Sed pharetra eros non dui pretium, sit amet suscipit risus fermentum. Ut urna nibh, vulputate non mi vel, luctus venenatis libero. Maecenas interdum fermentum odio et ornare. Proin non iaculis lectus. Morbi a arcu risus. Duis convallis, urna eu scelerisque porttitor, ante nisi lobortis neque, quis aliquet tellus risus quis metus. Aliquam erat volutpat. In aliquam orci vel sapien iaculis placerat. Cras ac lorem urna.
            </p>
          </div>
          
          <div className='sec4-img'>
            <img src={school2} alt="" />
          </div>
      </div>
      <div className='facilities'>
          <div className='facilities1'>
            <h1>OUR FACILITIES</h1>
          </div>
          <div className='facil-imgs'>
            <div className='facil-imgtxt'>
                <h1>Computer Lab</h1>
                <div className='facil-img'>             
                  <img src={school3} alt="" />
              </div>
            </div>
             <div className='facil-imgtxt'>
                <h1>Science Lab</h1>
                <div className='facil-img'>             
                  <img src={school3} alt="" />
              </div>
            </div>
             <div className='facil-imgtxt'>
                <h1>Computer Lab</h1>
                <div className='facil-img'>             
                  <img src={school3} alt="" />
              </div>
            </div>
            
            {/* <div className='sec5-img'>
              <img src={school3} alt="" />
            </div>
            <div className='sec5-img'>
              <img src={school3} alt="" />
            </div> */}
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home