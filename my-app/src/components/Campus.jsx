import React from 'react'
import galleryOne from '../assets/gallery-1.jpg'
import galleryTwo from '../assets/gallery-2.png'
import galleryThree from '../assets/gallery-3.png'
import galleryFour from '../assets/gallery-4.jpg'
import WhiteArrow from '../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={galleryOne} alt="" />
            <img src={galleryTwo} alt="" />
            <img src={galleryThree} alt="" />
            <img src={galleryFour} alt="" />
        </div>
        <button className='btn btn-primary'>See more here <img src={WhiteArrow} alt="" style={{width: '25px'}} /></button>
    </div>
  )
}

export default Campus
