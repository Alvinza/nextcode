import React from 'react'
import galleryOne from '../assets/gallery-1.jpg'
import galleryTwo from '../assets/gallery-2.png'
import galleryThree from '../assets/gallery-3.png'
import galleryFour from '../assets/gallery-4.jpg'
import WhiteArrow from '../assets/white-arrow.png'

const Campus = () => {
  return (
     // Main container for the campus section
    <div className='campus'>
        <div className="gallery">
            <img src={galleryOne} alt={galleryOne} />
            <img src={galleryTwo} alt={galleryTwo} />
            <img src={galleryThree} alt={Three} />
            <img src={galleryFour} alt={galleryFour} />
        </div>
        <button className='btn btn-primary'>
          See more here
          <img src={WhiteArrow} alt="" style={{width: '25px'}} />
        </button>
    </div>
  )
}

export default Campus
