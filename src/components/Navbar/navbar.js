import React from 'react'
import './navbar.css'
import SearchIcon from '../../assets/search-icon.png'




const navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar=menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>

      </ul>
      <div className="navbar-right">
        <img src={SearchIcon.search} alt=""/>
      </div>
    </div>
  )
}

export default navbar
