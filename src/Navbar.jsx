
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {

    const [showMediaIcons,setshowMediaIcons]=useState(false);


  return (
   <>
    <nav className='main-nav'>
     {/* 1st logo part */}
    <div className="logo">
        <h2><span>H</span>ealth
        <span>M</span>onotoring
        <span>S</span>ystem
        </h2>
    </div>


    {/* 2nd menu part */}
    <div className={showMediaIcons ? "menu-link  mobile-menu-link" : "menu-link"}>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
               <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/checkhealth">CheckHealth</Link>
   
            </li>

            <li>
                 <Link to="/healthtips">HealthTips</Link>
            </li>
        </ul>
    </div>


    {/* 3rd social media links */}
    <div className="social-media">
      
        {/* hamburger menu start */}
        <div className="hamburger-menu">
        <a href="#" onClick={()=>setshowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu/>
        </a>

        </div>


    </div>

    </nav>

{/* 
    hero section */}

   
   </>
  )
}

export default Navbar;