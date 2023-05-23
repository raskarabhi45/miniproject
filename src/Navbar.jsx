
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);

    };


  return (

    
   <>
    <header>
        <div class="logo">
           <span>Health monitoring System</span>
        </div>
        <nav className={isMenuOpen ? 'hamburger_menu_active' : 'hide-menu'} id="nav-bar">  
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/checkhealth">CheckHealth</Link>
        <Link to="/healthtips">HealthTips</Link>
        <Link to="/contact">Contact</Link>
        </nav>

        <button className="hamburger" id="responsive2" onClick={toggleMenu}>         
           <RxHamburgerMenu/>
        </button>
    </header>



   
   </>
  )
}

export default Navbar;