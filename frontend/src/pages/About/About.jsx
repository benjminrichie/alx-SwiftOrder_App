import React from 'react'
import './About.css'

// import { authors } from '../../assets/assets'
// import MyAuthors from '../../components/MyAuthors/MyAuthors'
import { authorDetails } from '../../assets/authorDetails'
import AboutList from './AboutList'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className="about">
      <div className='aboutWriteUp'>
        <p>
          The SwiftOrder App was inspired by a shared frustration 
          experienced by the three of us, Benjamin, Destiny and Robert, 
          during our busy workdays. We frequently struggled with the 
          inefficiencies of ordering food, from miscommunications to 
          delivery delays. Destiny, a restaurant owner we know, also 
          highlighted the challenges of managing orders effectively. 
          This project, a Portfolio Project for Holberton School, 
          aims to streamline the food ordering process for users 
          and improve order management for restaurants. 
          Learn more about Holberton School <span id='mySpan'><a href='https://www.holbertonschool.com/'>here.</a></span>
        </p>
      </div>
      <AboutList authorDetails={authorDetails}/>
      <div className='aboutIconsContainer'>
      <div className='yomexIcons'>
          <a href='https://x.com/yomex96'>
            <img src={assets.x} alt="" />
          </a>
          <a href='https://www.instagram.com/'>
            <img src={assets.ig} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/abayomi-robert-onawole-1b979019a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
            <img src={assets.linkedin} alt="" />
          </a>
          <a href='https://github.com/yomex96/'>
            <img src={assets.git} alt="" />
          </a>
        </div>

        <div className='bensIcons'>
          <a href='https://x.com/benjminrichie'>
            <img src={assets.x} alt="" />
          </a>
          <a href='https://www.instagram.com/benjaminrichard15/'>
            <img src={assets.ig} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/benjminrichie/'>
            <img src={assets.linkedin} alt="" />
          </a>
          <a href="https://github.com/benjminrichie">
            <img src={assets.git} alt="" />
          </a>
        </div>
        
        <div className='destinyIcons'>
          <a href='https://x.com/dtwitch01?s=11'>
            <img src={assets.x} alt="" />
          </a>
          <a href='https://www.instagram.com/dtwitch_?igsh=amZpd2RoMWE1ZTI1&utm_source=qr'>
            <img src={assets.ig} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/destiny-aghafekokhian-43840a188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
            <img src={assets.linkedin} alt="" />
          </a>
          <a href='https://github.com/Dtwitchy'>
            <img src={assets.git} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About