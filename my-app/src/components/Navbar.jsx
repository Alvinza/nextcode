// Handles sticky nav on scroll and mobile menu toggle.
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll'
import menuIcon from '../assets/menu-icon.png'

// Navbar component with sticky behavior and mobile responsiveness
const Navbar = () => {
    // State to handle sticky navbar behavior
    const [sticky, setSticky] = useState(false)

    // Effect to add scroll event listener for sticky navbar
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 220 ? setSticky(true) : setSticky(false)
        })
    }, [])

    // State and handler for mobile menu toggle
    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
        console.log("hu")
    }
  
    return (
        // navbar container with conditional sticky styling
        <div className={`navBar ${sticky ? 'darkNav' : ''}`}>
            <div className="logo">
                <img src={logo} alt="logo" style={{width: '250px', marginLeft: '2rem'}} />
            </div>
            {/* Navigation links with mobile menu visibility toggle */}
            <div className={mobileMenu ? '' : 'hideMobileMenu'}>
                <div className='links'>
                    <Link to='hero' smooth={true} offset={0} duration={500} style={{color: 'white'}}>Home</Link>
                    <Link to={'programs'} smooth={true} offset={-260} duration={500} style={{color: 'white'}}>Program</Link>
                    <Link to={'about'} smooth={true} offset={-150} duration={500} style={{color: 'white'}}>About</Link>
                    <Link to={'campus'} smooth={true} offset={-260} duration={500} style={{color: 'white'}}>Campus </Link>
                    <Link to={'testimonials'} smooth={true} offset={-260} duration={500} style={{color: 'white'}}>Testimonials</Link>
                    <Link className='btn btn-outline-secondary' smooth={true} offset={-260} duration={500} to={'contact'}>Contact</Link> 
                </div>
            </div>
            {/* Mobile menu toggle button */}
            <div>
                <img src={menuIcon} alt="" className='menuIcon' onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Navbar
