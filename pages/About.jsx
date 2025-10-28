import React from 'react'
import "./About.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'
import school1 from "../src/assets/school1.jpg";
import Totop from "../components/Totop";
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap[10px]">
      <Navmob />
      <div className="flex lg:hidden h-20"></div>
      <Navpc page="about" />
      <div className="flex flex-col items-center justify-center lg:h-fit border-0 border-[gold] gap-1">
        <div className="h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row border-2 border-[gold]">
          <div className="lg:h-100 lg:w-200">
            <img
              className="lg:h-4/4 object-cover lg:w-200 border-t-2 border-b-2 border-[gold]"
              src={school1}
              alt="heroes pinnacle schools"
            />
          </div>
          <div className=" lg:h-100 lg:w-2/4 w-[95%] h-fit flex flex-col items-center justify-evenly">
            <h1 className="text-4xl lg:text-6xl lg:text-left lg:w-[95%] mt-2">
              About the School
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla
              id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non
              felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc.
              Phasellus efficitur vulputate orci, vel dignissim risus viverra
              vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel
              arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu
              rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
            </p>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row-reverse border-2 border-[gold] lg:justify-between">
          <div className="lg:h-100 lg:w-150 h-70 w-full bg-amber-400">
            <img
              className="lg:h-4/4 lg:object-cover lg:w-150 h-70 w-full object-cover border-b-2 border-t-2 border-[gold]"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
              alt="heroes pinnacle schools"
            />
          </div>
          <div className="lg:h-100 lg:w-3/4 flex flex-col justify-evenly h-100 w-full items-center">
            <h1 className="text-4xl lg:text-6xl lg:text-left lg:w-[95%] w-[95%] text-center mt-2">
              About the Proprietress
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-lg w-[95%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla
              id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non
              felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc.
              Phasellus efficitur vulputate orci, vel dignissim risus viverra
              vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel
              arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu
              rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
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
          <div className="lg:h-100 lg:w-3/4 flex flex-col justify-evenly  h-100 w-full items-center">
            <h1 className="text-4xl lg:text-6xl lg:text-left lg:w-[95%] w-[95%] text-center mt-2">
              About the Proprietor
            </h1>
            <p className="text-justify lg:w-[95%] lg:text-lg w-[95%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla
              id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non
              felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc.
              Phasellus efficitur vulputate orci, vel dignissim risus viverra
              vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel
              arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu
              rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
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