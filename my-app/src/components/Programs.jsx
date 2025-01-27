import React from 'react'

// Import program images
import programOne from '../assets/program-1.jpg'
import programTwo from '../assets/program-2.jpg'
import programThree from '../assets/program-3.avif'

// Import program icon images
import programIconOne from '../assets/program-icon-1.png'
import programIconTwo from '../assets/program-icon-2.png'
import programIconThree from '../assets/program-icon-3.png'

/**
 * Programs Component
 * 
 * Displays a grid of educational programs with their corresponding images and icons.
 * Each program card contains a main image and a caption with an icon and program name.
 * 
 * @returns {JSX.Element} A div containing three program cards
 */
const Programs = () => {
  return (
    // Main container with programs class and ID for navigation
    <div className='programs' id='programs'>
        {/* Program Card 1 - Graduation Degree */}
        <div className="program">
            <img src={programOne} alt="" />
            <div className="caption">
                <img src={programIconOne} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

        {/* Program Card 2 - Master Degree */}
        <div className="program">
            <img src={programTwo} alt="" />
            <div className="caption">
                <img src={programIconTwo} alt="" />
                <p>Master Degree</p>
            </div>
        </div>

        {/* Program Card 3 - Post Degree */}
        <div className="program">
            <img src={programThree} alt="" />
            <div className="caption">
                <img src={programIconThree} alt="" />
                <p>Post Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs