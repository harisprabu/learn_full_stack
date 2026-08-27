import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'

const NavBar = () => {
  return (
    <div>
        <nav id='navigation'>
            <Link to='/home' id='bar'>Home</Link>
            <Link to='/about' id='bar'>About</Link>
            <Link to='/gallery' id='bar'>Gallery</Link>
            <Link to='/contact' id='bar'>Contact</Link>
        </nav>
    </div>
  )
}

export default NavBar

