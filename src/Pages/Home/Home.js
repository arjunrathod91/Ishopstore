import React, { useContext } from 'react'
import './Home.scss'
import { Context } from '../../Context/UserContext'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import SearchButton from '../../Components/SearchButton/SearchButton'
import Contact from '../../Components/Contact/Contact'
import { Link, useNavigate } from "react-router-dom";
import allData from '../../data'

function Home() {
  const {data} = useContext(Context)
  const navigate = useNavigate();
  const data1 = [...allData].reverse()
  const start1 = 0;
  const start2 = 4;
  const end1 = 4;
  const end2 = 8;
  const desc1 = "Discover our latest featured product, crafted with precision and quality. Designed with the professional threads and lots of love"
  const desc2 = "Discover our latest featured product, crafted with precision and quality. Designed with the professional threads and lots of love"
  const search = () => {
    navigate('/searchPage')
  }
  return (
    <div className='home'>
      {/* <SearchButton search={search}  /> */}
      <Slider/>
      <FeaturedProduct type="Featured Product" categoryData={allData} start={start1} end={end1} desc={desc1}/>
      <FeaturedProduct type="Trending Product" categoryData={allData} start={start2} end={end2} desc={desc2}/>
      {/* <Contact/>  */}
      {/*
      <FeaturedProduct type="Trending Product"/>
      <Categories/>
      <Contact/> */}
    </div>
  )
}

export default Home
