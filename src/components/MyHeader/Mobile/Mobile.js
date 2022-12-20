import React from 'react'
import './Mobile.css'

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <i class="fi fi-bs-cross-circle"></i>
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
      <a href='#info'>
      1. About
      </a>
    </div>
    <div className='mobile-option'>
      <a href='#projects'>
      2. Projects
      </a>
    </div>
    <div className='mobile-option'>
      <a href='#experience'>
      3. Experience
      </a>
    </div>
    <div className='mobile-option'>
      <a href='#contact'>
      4. Contact
      </a>
    </div>
    </div>
    </div>)
}

export default Mobile