import React from 'react'
import "../src/App.css"
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import school2 from '../src/assets/school2.jpg'

const Home = () => {
  return (
    <div>
      <div className='navmob1'>
        <Navmob/>
      </div>
      <Navpc page="home"/>
      <div className='sec1'>

      </div>
      <div  className='hero'>
        <div className='hero1'>
            <h1>HEROES ACADEMY</h1>
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
              <h1>Why Choose Heroes?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum ex erat. Proin ut ex eu mauris hendrerit dictum fringilla id dolor. Sed felis lorem, cursus vitae dictum vitae, ornare non felis. Maecenas at nulla id lacus rutrum dictum sit amet non nunc. Phasellus efficitur vulputate orci, vel dignissim risus viverra vitae. Integer quis tempor libero. Nulla facilisi. Suspendisse vel arcu ac lectus tempor ultrices. Quisque blandit imperdiet eros eu rutrum. Etiam et turpis et ligula molestie rhoncus id in leo.
              </p>
          </div>
          <div className='sec2-img'>
              <img src={school2} alt="" />
          </div>
      </div>
      <div className='sec3'>

      </div>
    </div>
  )
}

export default Home