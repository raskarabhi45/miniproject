import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{
  return(
    <>

    <h2>Health Monitoring System</h2>

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/checkhealth">CheckHealth</Link>
    <Link to="/healthtips">HealthTips</Link>

    {/* <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/checkhealth">CheckHealth</a>
    <a href="/healthtips">HealthTips</a> */}
     
    </>
  );
};

export default Navbar;
