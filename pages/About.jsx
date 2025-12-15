import React from 'react'
import "./About.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import Totop from "../components/Totop";
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap[10px] border-2 border-[gold]">
      <Navmob />
      <div className="flex lg:hidden h-20"></div>
      <Navpc page="about" />
      <div className="flex flex-col items-center justify-center lg:h-fit border-0 border-[gold] gap-2">
        <div className="h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row border-2 border-[gold]">
          <div className="lg:h-100 lg:w-200">
            <img
              className="lg:h-4/4 object-cover lg:w-200 border-t-2 border-b-2 border-[gold]"
              src="https://ik.imagekit.io/percival26/schooledge.JPG?updatedAt=1761574725206"
              alt="heroes pinnacle schools"
            />
          </div>
          <div className=" lg:h-100 lg:w-2/4 w-[95%] h-fit flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl lg:text-5xl lg:text-left lg:font-bold lg:w-[95%] mt-2">
              About the School
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-md">
              Heroes Pinnacle Schools is a co-educational institution committed
              to raising confident, disciplined, and academically excellent
              learners. We provide quality education across Nursery, Primary,
              and Junior Secondary levels, creating a strong foundation for
              lifelong learning and success. <br /> At Heroes Pinnacle Schools,
              we believe every child has the potential to become a leader and
              achiever. Our teaching approach combines a well-structured
              curriculum with moral values, creativity, and practical skills to
              nurture well-rounded individuals who can excel in an ever-changing
              world. <br />
              Our learning environment is safe, supportive, and stimulating,
              designed to encourage curiosity, critical thinking, and
              self-expression. With qualified and passionate educators, modern
              teaching methods, and a strong emphasis on character development,
              we guide students to reach the pinnacle of their abilities.
            </p>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row-reverse border-2 border-[gold] lg:justify-between">
          <div className="lg:h-100 lg:w-150 h-70 w-full bg-amber-400">
            <img
              className="lg:h-4/4 lg:object-cover lg:w-150 h-70 w-full object-cover border-b-2 border-t-2 border-[gold]"
              src="https://ik.imagekit.io/percival26/IMG-20251120-WA0130_1_.jpg?updatedAt=1763663656598"
              alt="heroes pinnacle schools"
            />
          </div>
          <div className="lg:h-100 lg:w-3/4 flex flex-col justify-evenly h-fit w-full items-center">
            <h1 className="text-3xl lg:text-5xl lg:text-left lg:font-bold lg:w-[95%] w-[95%] text-center mt-2">
              About the Proprietress
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-md w-[95%]">
              Mrs Ijeoma Oladeji, is a visionary educationist with a deep
              passion for nurturing young minds and building a strong foundation
              for future leaders. Her commitment to quality education, moral
              discipline, and holistic child development is the driving force
              behind the establishment and growth of the school. <br /> With a
              clear understanding of the importance of education in shaping
              society, she founded Heroes Pinnacle Schools to provide a learning
              environment where academic excellence is balanced with character
              formation, creativity, and leadership development. Her philosophy
              is centered on the belief that every child is a hero with unique
              talents that must be discovered, guided, and nurtured. <br />{" "}
              Through dedication, strong leadership, and hands-on involvement,
              the Proprietress ensures that the school maintains high
              educational standards, qualified teaching staff, and a safe,
              child-friendly atmosphere. She is committed to continuous
              improvement, innovation in teaching methods, and the overall
              well-being of both students and staff.
            </p>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row lg:border-b-2 border-2 border-[gold] lg:justify-between">
          <div className="lg:h-100 lg:w-150 h-70 w-full bg-amber-400">
            <img
              className="lg:h-4/4 lg:object-cover lg:w-150 h-70 w-full object-cover border-b-2 border-t-2 border-[gold]"
              src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="heroes pinnacle schools"
            />
          </div>
          <div className="lg:h-100 lg:w-3/4 flex flex-col justify-evenly h-fit w-full items-center">
            <h1 className="text-3xl lg:text-5xl lg:text-left lg:font-bold lg:w-[95%] w-[95%] text-center mt-2">
              About the Chairman
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-md w-[95%]">
              Pastor Ayodele Oladeji is a visionary leader and education enthusiast
              committed to fostering excellence in learning and holistic child
              development. With a wealth of experience in leadership and a deep
              understanding of the transformative power of education, he
              provides strategic guidance and oversight to ensure the school
              achieves its mission and maintains the highest standards of
              academic and moral excellence. <br className='' /> Under his stewardship,
              Heroes Pinnacle Schools has grown into a thriving educational
              institution where every child is encouraged to reach their full
              potential. He believes in a balanced approach to education — one
              that combines rigorous academics, character formation, and
              co-curricular activities to develop well-rounded, responsible, and
              innovative leaders of tomorrow. <br /> With a focus on quality,
              discipline, and community engagement, the Chairman continues to
              inspire teachers, students, and stakeholders alike, ensuring that
              Heroes Pinnacle Schools remains a beacon of excellence in
              education and a place where young heroes are nurtured to reach the
              pinnacle of their abilities.
            </p>
          </div>
        </div>
      </div>
      <Totop />
      <Footer />
    </div>
  );
}

export default About