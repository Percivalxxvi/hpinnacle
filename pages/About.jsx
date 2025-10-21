import React from 'react'
import "./About.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navmob/>
       <div  className='flex lg:hidden h-20'>
        
      </div>
      <Navpc page="about"/>
      <div className='flex flex-col items-center justify-center lg:h-fit'>
          <div className='h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row lg:mt-20 mt-10 border-b-4 border-[gold]'>
              <div className='lg:h-100 lg:w-200'>
                <img className='lg:h-4/4 object-cover lg:w-200' src={school2} alt="" />
              </div>
              <div className='lg:ml-10 lg:h-100 lg:w-2/4 w-[95%] flex flex-col items-center justify-evenly p-5 h-85'>
                <h1 className='text-4xl lg:text-6xl lg:text-left lg:w-[95%]'>About the School</h1>
                <p className='text-justify ml-5 lg:w-[95%] lg:text-lg'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
            
          </div>
          <div className='h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row-reverse lg:mt-20 mt-10 border-b-4 border-[gold] lg:justify-between'>
              <div className='lg:h-100 lg:w-150 h-70 w-full bg-amber-400 border-2 border-[gold]'>
                <img className='lg:h-4/4 lg:object-cover lg:w-150 h-70 w-full object-cover' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
              </div>
              <div className='lg:ml-10 lg:h-100 lg:w-3/4 flex flex-col justify-evenly p-5 h-85 w-full items-center'>
                <h1 className='text-4xl lg:text-6xl lg:text-left lg:w-[95%] w-[95%] text-center'>About the Proprietress</h1>
                <p className='text-justify ml-5 lg:w-[95%] lg:text-lg w-[95%]'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
          </div>
          <div className='h-fit w-full flex flex-col items-center justify-center lg:h-100 lg:flex-row lg:mt-20 mt-10 border-b-4 border-[gold] lg:justify-between'>
              <div className='lg:h-100 lg:w-150 h-70 w-full bg-amber-400 border-2 border-[gold]'>
                <img className='lg:h-4/4 lg:object-cover lg:w-150 h-70 w-full object-cover' src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
              </div>
              <div className='lg:ml-10 lg:h-100 lg:w-3/4 flex flex-col justify-evenly p-5 h-85 w-full items-center'>
                <h1 className='text-4xl lg:text-6xl lg:text-left lg:w-[95%] w-[95%] text-center'>About the Proprietor</h1>
                <p className='text-justify ml-5 lg:w-[95%] lg:text-lg w-[95%]'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About