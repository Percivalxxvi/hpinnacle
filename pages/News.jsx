import React from 'react'
import './News.css'
import Navmob from '../components/Navmob'
import Navpc from '../components/Navpc'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div>
        <div  className='navmob1'>
        <Navmob/>
      </div>
      <Navpc page="news"/>
      <div className='sec1'>

      </div>
      <div className='news'>        
          <div className='news2'>
              <h1>STAY TUNED FOR NEWS</h1>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default News