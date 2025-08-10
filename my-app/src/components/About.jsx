import React from 'react'
import aboutImg from '../assets/about.avif'
import playIcon from '../assets/play-icon.png'

// Component that displays information about the bootcamp and includes a video player trigger
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      {/* Left section containing the main image and play button overlay */}
      <div className="aboutLeft">
        <img src={aboutImg} alt="" className='aboutImg' />
        {/* Play button that triggers video player state */}
        <img 
          src={playIcon} 
          alt="" 
          className='playIcon' 
          onClick={() => {
            setPlayState(true)
         }} 
         style={{cursor: 'pointer'}} 
        />
      </div>
      {/* Right section */}
      <div className="aboutRight">
        <h3>About Bootcamp</h3>
        <h2>Next Code</h2>
        <p>Next Code is Cape Town's premier tech education hub, empowering aspiring developers and tech professionals since 2020. Our intensive bootcamp programs are designed to transform beginners into industry-ready professionals through hands-on, practical learning experiences.</p>
        <p>We offer comprehensive programs in Web Development, Data Science, and Cyber Security, each carefully crafted to meet the demands of today's tech industry. Our Web Development track covers full-stack development, teaching you everything from HTML and CSS to advanced frameworks like React and Node.js. The Data Science program dives deep into Python, machine learning, and data analytics, while our Cyber Security course prepares you for the critical role of protecting digital assets.</p>
        <p>Located in the heart of Cape Town's vibrant tech district, our state-of-the-art campus provides an ideal learning environment. Our instructors are industry veterans with years of real-world experience, ensuring you learn not just the theory, but practical skills that employers value. We maintain small class sizes to guarantee personalized attention and support throughout your learning journey.</p>
        <p>Beyond technical skills, we focus on career readiness through mock interviews, portfolio development, and networking events with local tech companies. Our strong partnerships with leading South African tech firms have helped many of our graduates launch successful careers in the industry.</p>
        <p>Join our growing community of tech enthusiasts and take the first step toward your future in technology. Whether you're looking to switch careers or upgrade your skills, Next Code is your pathway to success in the digital world.</p>
      </div>
    </div>
  )
}

export default About
