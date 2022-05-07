import React from 'react'
import {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>          
    <p><a href="#home">Home</a></p>
    <p><a href="#wdtbn">What is DTBN?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dtbn__navbar">
      <div className="dtbn__navbar-links">
        <div className="dtbn__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dtbn__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dtbn__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
        </div>
        <div className="dtbn__navbar-menu">
          { toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => {setToggleMenu(false)}}  />
          : <RiMenu3Line color='#fff' size={27} onClick={() => {setToggleMenu(true)}} />
        }
        { toggleMenu && (
          <div className="dtbn__navbar-menu_container scale-up-center">
            <div className="dtbn__navbar-menu_container-links">
              <Menu/>
              <div className="dtbn__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
        </div>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Navbar