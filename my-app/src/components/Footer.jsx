import React from 'react'

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  
  return (
    <div className='footer'>
      <p>&copy; {fullYear} Next Code. All rights reserved</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
