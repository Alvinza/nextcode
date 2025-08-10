import React from 'react'
import darkArrow from '../assets/dark-arrow.png'

const Hero = () => {
  return (
    // Hero section container
    <div className='hero'>
      <div className="hero-text container">
        <h1>Code Without Limits</h1>
        <p>Our coding bootcamp offers immersive, hands-on 
          training to help you master in-demand programming skills quickly. 
          Whether you're a beginner or looking to upskill, we provide the tools
           and support you need to succeed in the tech industry.</p>
        <button className='btn btn-primary'>Explore more <img src={darkArrow} style={{width: '15px'}} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
