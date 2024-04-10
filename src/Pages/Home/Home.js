import React, { useContext } from 'react'
import './Home.scss'
import { Context } from '../../Context/UserContext'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'

function Home() {
  const {data} = useContext(Context)
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="Featured Product"/>
      {/*
      <FeaturedProduct type="Trending Product"/>
      <Categories/>
      <Contact/> */}
    </div>
  )
}

export default Home
