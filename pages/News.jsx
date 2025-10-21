import React from 'react'
import './News.css'
import Navmob from '../components/Navmob'
import Navpc from '../components/Navpc'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div>
        <Navmob/>
       <div  className='flex lg:hidden h-20'>
        
      </div>
      <Navpc page="news"/>
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