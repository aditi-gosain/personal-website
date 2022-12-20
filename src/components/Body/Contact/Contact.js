import React from 'react'
import Separator from '../../Common/Separator/Separator'
import Socials from '../../Common/Socials/Socials'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Get in Touch</label>
      <div className='contact-container'>
      <div className='contact-left'>
        <p>
        I’m currently looking for new opportunities! If you find my profile intriguing, please send me an email. I’ll get back to you!
        </p>
        <Socials/>
      </div>
      <div className='contact-right'>
        <a download className='btn' href={require("../../../assets/aditi-resume.pdf")}>My Resume</a>
        <a className='btn' href="mailto:aditisinghgosain@gmail.com">Say Hello</a>
      </div>
    </div>
    </div>
  )
}

export default Contact