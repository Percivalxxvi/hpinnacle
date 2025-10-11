import React from 'react'
import "./About.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'

const About = () => {
  return (
    <div>
       <div  className='navmob1'>
        <Navmob/>
      </div>
      <Navpc page="about"/>
      <div className='sec1'>

      </div>
      <div className='about1'>
          <div className='abt1'>
              <div className='abt1-img'>
                <img src={school2} alt="" />
              </div>
              <div className='abt1-txt'>
                <h1>About the School</h1>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
            
          </div>
          <div className='abt2'>
              <div className='abt2-img'>
                <img src="" alt="" />
              </div>
              <div className='abt2-txt'>
                <h1>About the Proprietress</h1>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
          </div>
          <div className='abt3'>
              <div className='abt3-img'>
                <img src="" alt="" />
              </div>
              <div className='abt3-txt'>
                <h1>About the School</h1>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About