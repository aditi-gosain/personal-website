import React from 'react'
import './Web.css'
import {HashLink} from 'react-router-hash-link';

function Web() {
  return (
    <div className='web'>
    <div className='web-option'>
      <HashLink to='/#info'>
      About
      </HashLink>
    </div>
    <div className='web-option'>
      <HashLink to='/#projects'>
      Projects
      </HashLink>
    </div>
    <div className='web-option'>
      <HashLink to='/#experience'>
      Experience
      </HashLink>
    </div>
    <div className='web-option'>
      <HashLink to='/#contact'>
      Contact
      </HashLink>
    </div>
    </div>
  )
}

export default Web