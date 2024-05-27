import React from 'react'
import './About.css'
import { authors } from '../../assets/assets'

const About = () => {
  return (
    <div className='about'>
      <div className='benjamin'>
        <img className='ben' src={authors.ben} alt="" />
        <div className="text">
          <h3>Benjamin Richard</h3>
          <p>Frontend</p>
          <small>benjminrichie@gmail.com</small>
          <h6>07081868797</h6>
        </div>
      </div>
      <div className='robert'>
        <img className='rob' src={authors.ben} alt="" />
        <div className="text">
          <h3>Abayomi Robert Onawole</h3>
          <p>Backend</p>
          <small>Abayomirobertonawole2@gmail.com</small>
          <h6>09160765827</h6>
        </div>
      </div>
      <div className='destiny'>
        <img className='des' src={authors.ben} alt="" />
        <div className="text">
          <h3>Destiny Aghafekokhian</h3>
          <p>Backend</p>
          <small>destiny.aghafekokhian200@gmail.com</small>
          <h6>09015069742</h6>
        </div>
      </div>
    </div>
  )
}

export default About