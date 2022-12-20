import React, { useState } from 'react'
import './MyHeader.css'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'

function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"><i class="fi fi-bs-at"></i></div>
      <div className="menu">
        <div className="web-menu">
          <Web/>
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
          <i class="fi fi-bs-menu-burger menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  )
}

export default MyHeader