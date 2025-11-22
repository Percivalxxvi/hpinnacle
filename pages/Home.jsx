import React,{ useState, useEffect } from 'react'
import "../src/App.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
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

  return (
    <div className="flex flex-col gap-2 bg-gray-300 border-2 border-[gold]">
      <Navmob />
      <div className="flex lg:hidden h-20"></div>
      <Navpc page="home" />
      <Homeslide />
      <div className="mobhero">
        <p>
          Welcome to Heroes Pinnacle Schools, At Heroes Pinnacle Schools, we are
          committed to nurturing young minds and shaping future leaders, with
          God as a guide. Our institution offers a seamless educational journey
          from Nursery through Primary and Secondary School, providing a
          holistic learning environment that emphasizes academic excellence,
          personal growth, and moral development. <br />• Nursery School: Our
          Nursery Program is designed to spark curiosity, creativity, and a love
          for learning in our youngest learners. With a safe and stimulating
          environment, our experienced educators focus on early childhood
          development, fostering social skills, emotional growth, and
          foundational literacy and numeracy skills. <br />• Primary School: In
          our Primary School, students build on the foundation laid in nursery.
          We combine a structured curriculum with engaging activities that
          encourage critical thinking, problem-solving, and collaborative
          learning. Our goal is to cultivate confident, independent, and
          responsible learners who are prepared for the challenges of higher
          education. <br />• Secondary School: At Heroes Pinnacle Secondary
          School, we focus on preparing students for both academic and life
          success. With a comprehensive curriculum that includes sciences, arts,
          technology,
          {/*  and extracurricular activities, our students are equipped with the skills, */}
          discipline, and knowledge needed to excel in their chosen paths. We
          emphasize leadership, ethical values, and innovation, ensuring our
          graduates are well-rounded individuals ready to make a positive impact
          in the world.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center border-b-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center lg:justify-between w-[95%] lg:h-100 h-fit">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold mt-3 lg:mt-0">
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
            • Critical Thinking{" "}
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Values and Character Development
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • Strong sense of Community
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left mb-2 lg:mb-0">
            • Improved Grades{" "}
          </p>
        </div>
        <div className="h-4/4 w-4/4 lg:w-2/4">
          <img
            src="https://ik.imagekit.io/percival26/schoolfar.JPG?updatedAt=1761573302333"
            alt="heroes pinnacle schools"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center border-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center lg:justify-between w-[95%] lg:h-100 lg:mb-0 mb-2 lg:mt-0 mt-2">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold">
            OUR UNIQUE STYLE
          </h1>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            At Heroes Pinnacle Schools, we believe in a holistic approach to
            education.
          </p>
          <p className="lg:text-[21px] text-md lg:w-[95%] text-left">
            • God Factor - We have a mandate to raise Godly Seeds, Kingdom Army,
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
          <img
            src="https://ik.imagekit.io/percival26/frontlow.JPG?updatedAt=1761585120087"
            alt="heroes pinnacle schools"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:h-fit justify-center items-center border-2 border-[gold]">
        <div className="flex flex-col lg:w-2/4 justify-center lg:items-center w-[95%] lg:h-fit lg:mb-0 mb-2 lg:mt-0 mt-2">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold lg:mt-3.5">
            Academic Excellence!
          </h1>
          <p className="text-[18px] lg:text-[15px] text-justify lg:w-[95%] mb-1">
            Academic excellence at Heroes Pinnacle Schools is rooted in the
            conviction that every learner has the potential to rise to the
            “pinnacle” of their aspirations. This commitment means that students
            are not just taught facts, but are guided to think deeply, create
            meaning, and apply knowledge to real-world challenges. At the same
            time, Heroes Pinnacle Schools foster God fearing character,
            responsibility and global readiness — so that academic mastery goes
            hand in hand with personal growth.
          </p>
          <p className="text-[18px] lg:text-[15px] text-left lg:w-[95%] font-semibold">
            In this school community:{" "}
          </p>
          <p className="text-[18px] lg:text-[15px] text-left lg:w-[95%] mt-1 indent-4 lg:mt-0">
            • Teachers deliver a rigorous, well-structured curriculum aligned
            with national and international standards, ensuring students excel
            in exams and beyond.
          </p>
          <p className="text-[18px] lg:text-[15px] text-left lg:w-[95%] mt-1 indent-4 lg:mt-0">
            {" "}
            • Learners benefit from a supportive environment in which their
            individual strengths are identified, nurtured and stretched.
          </p>
          <p className="text-[18px] lg:text-[15px] text-left lg:w-[95%] mt-1 indent-4 lg:mt-0">
            • The ethos of excellence is embedded not only in grades and
            results, but in habits: disciplined study, curiosity, perseverance
            when challenges arise, collaboration, reflection and innovation.
          </p>
          <p className="text-[18px] lg:text-[15px] text-left lg:w-[95%] mt-1 indent-4 lg:mt-0">
            • Academic excellence at Heroes Pinnacle is also about preparing
            students to be responsible citizens and future leaders: able to
            adapt, solve problems, and contribute positively to society.
          </p>
        </div>

        <div className="h-4/4 w-4/4 lg:w-2/4 lg:h-4/4">
          <img
            src="https://ik.imagekit.io/percival26/clasroom1.JPG?updatedAt=1761585614181"
            alt="heroes pinnacle schools"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-[gold]">
        <div>
          <h1 className="text-4xl lg:text-5xl text-center font-semibold lg:mt-[20px] border-b-2 border-[gold]">
            OUR FACILITIES
          </h1>
        </div>
      </div>

      <div className="h-fit lg:h-150 border-b-2 border-t-2 border-[gold] lg:mb-5">
        <Facilities />
      </div>
      <Totop />
      <Footer />
    </div>
  );
}

export default Home
