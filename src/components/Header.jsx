import React from 'react'
import {Link } from 'react-router-dom'
import {FaHome } from 'react-icons/fa'
function Header() {
  return (
    <div>
      <h4>GitHub header | <span><Link to='/'> Home</Link></span> | <span><Link to='/about'> About</Link></span></h4>
    </div>
  )
}

export default Header
