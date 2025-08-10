import React from 'react'

// Reusable Title component. props:
const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
