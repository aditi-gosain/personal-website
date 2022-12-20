import React from 'react'
import './home.css'
import MyHeader from '../MyHeader/MyHeader'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="home">
    <div>
        <MyHeader/>
    </div>
    <div>
        <Body/>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}

export default Home