import React from 'react'
import './Mobile.css'
import {HashLink} from 'react-router-hash-link';

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <i class="fi fi-bs-cross-circle"></i>
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
      <HashLink to='/#info'>
      1. About
      </HashLink>
    </div>
    <div className='mobile-option'>
      <HashLink to='/#projects'>
      2. Projects
      </HashLink>
    </div>
    <div className='mobile-option'>
      <HashLink to='/#experience'>
      3. Experience
      </HashLink>
    </div>
    <div className='mobile-option'>
      <HashLink to='/#contact'>
      4. Contact
      </HashLink>
    </div>
    </div>
    </div>)
}

export default Mobile