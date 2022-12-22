import React from 'react'
import Separator from '../../Common/Separator/Separator'
import { TechData } from '../../data/technologies'
import "./Info.css"

function Info() {
  const data = TechData;
  return (
    <div className='info'>
    <Separator/>
    <label className='section-title'>About Me</label>
    <div className='info-body'>
    <div className='info-image'>
    <img src={require('../../../assets/my-image.jpg')} className='info-picture'/>
    </div>
    <div className='info-text'>
    My name is Aditi Singh. I am a pre-final year undergraduate at the <span className='college-name'><a href="https://www.iitism.ac.in/iitismnew/">Indian Institute of Technology Dhanbad</a></span>.<br/><br/>
    Coding is my passion and I enjoy creating projects and transforming ideas into reality using code. In my free time, I love reading, sketching and listening to music. I am also an active debater and orator.<br/><br/>
    Here are a few technologies I've been working with recently:<br/><br/>
    <div className='tech-table'>
    {data.map((item) => {
            return <ul><li>{item}</li></ul>;
        })}
    </div>
    </div>
</div>
</div>)
}

export default Info
