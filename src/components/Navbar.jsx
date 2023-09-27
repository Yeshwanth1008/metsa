import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
   <>
   <div className="navbar">
    <div className="navbar_logo">
 <img src={logo} alt="" width="40px" />
    </div>
    <div className="navbar_links">
<ul>
    <li><Link to='/' className="link-style">Home</Link></li>
    <li><Link to='/about' className="link-style">Initiatives</Link></li>
    <li><Link to='/events' className="link-style">Events</Link></li>
    <li><Link to='/contact' className="link-style">Contact</Link></li>
</ul>
    </div>
   </div>
   
   </>
  )
}

export default Navbar