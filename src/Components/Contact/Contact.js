import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.scss'


function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Be In Touch With US</span>
            <div className="mail">
                <input type="text" placeholder='Enter Your Name..' />
                <button>join US</button>
            </div>
            <div className="icons">
              <FacebookIcon/>
              <InstagramIcon/>
              <RedditIcon/>
              <LinkedInIcon/>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
