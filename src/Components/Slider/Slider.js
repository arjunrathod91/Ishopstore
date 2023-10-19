import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slider.scss'

function Slider() {
    const [currentSlide,setCurrentSlide] = useState(0);

    // const prevSlide=()=>{
    //     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1 )

    // }

    // const nextSlide=()=>{
    //     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1 )

    // }

    const data = [
        'https://wallpapercave.com/wp/qsB1iYk.jpg',
        'https://th.bing.com/th/id/R.0813b2feaa45ed846086f778eb812397?rik=2RqJIeKdIXwDtg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-vLaPjSSQmpg%2fUmZrKZRA8SI%2fAAAAAAAAG0s%2fG3AMsr9ML_k%2fs1600%2fFashion%2bPhotography%2b(30).jpg&ehk=BuDjL4GM8MiFj%2bPKD0NTu05z9I7TqlDZU%2ba8C7Z2fEU%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.95a8527e673099128b8ce37cd08145c4?rik=0GBAntsqBtYsAQ&riu=http%3a%2f%2fwww.poeltcommunication.de%2fwp-content%2fuploads%2f2017%2f09%2fpoelcommunication-fashion-landscape-s-w-18.jpg&ehk=zn4Vk%2fJgXyEjGFaUwUxwAd5VOl%2bSQDAV8JfGKvDHPnE%3d&risl=&pid=ImgRaw&r=0'    ]
  return (
    <div className='slider'>
        {/* style={{transform:`translateX(-${currentSlide * 100}vw)`}} */}
        <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        </div>
        {/* <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ArrowBackIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowForwardIcon/>
            </div>
        </div> */}
        
    </div>
  )
}

export default Slider
