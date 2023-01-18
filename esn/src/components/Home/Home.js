import React from 'react'
import './Home.css'
import HerculesTower from '../../assets/Images/HerculesTower.jpg'
import Introduction from './Introduction/Introduction'
import FlippingCard from './FlippingCard/FlippingCard'

function Home() {
  return (
    <div className='home'>
        {/* <img src={HerculesTower} className="firstImg" /> */}
        <Introduction className="introduction"/>
        <div className='flippingCard'>
            <h1 className='cardTitle'>Join our community with the ESN Card</h1>
            <FlippingCard />
        </div>
    </div>
  )
}

export default Home