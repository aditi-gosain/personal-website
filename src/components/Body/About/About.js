import React from 'react'
import Socials from '../../Common/Socials/Socials'
import "./About.css"

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
            Hi there! My name is <br/>
            <span className='info-name'>Aditi Singh.</span> <br/> 
            {/* I am a pre-final year undergraduate at the Indian Institute of Technology Dhanbad. */}
            <span className="info-desc">Student.<br/>Software Developer.</span>
            </div>
            <div className='about-image'>
            <img src={require('../../../assets/coding-img.png')} className='picture'/>
            </div>
        </div>
        <Socials/>
    </div>
  )
}

export default About