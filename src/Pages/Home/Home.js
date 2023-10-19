import React from 'react'
import Slider from '../../Components/Slider/Slider'
import './Home.scss'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'

function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="Featured Product"/>
      <FeaturedProduct type="Trending Product"/>
      <Categories/>
      <Contact/>
    </div>
  )
}

export default Home
