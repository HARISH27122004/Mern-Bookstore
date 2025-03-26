import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='back-button'>
      <Link to={destination} className='backLink'>
        <i className="back-button-icon fa fa-arrow-left"></i>
        Back
      </Link>
    </div>
  )
}

export default BackButton