import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='homepage-container'>
      <button><Link to="/apitester">Check API!</Link></button>
    </div>
  )
}

export default Homepage