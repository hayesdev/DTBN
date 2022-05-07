import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="dtbn__navbar">
      <div className="dtbn__navbar-links">
        <div className="dtbn__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dtbn__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wdtbn">What is DTBN?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar