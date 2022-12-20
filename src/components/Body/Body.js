import React from 'react'
import About from './About/About'
import Projects from './Projects/Projects'
import "./Body.css"
import Info from './Info/Info'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='info'>
        <Info/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body