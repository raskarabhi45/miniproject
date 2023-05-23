import React from 'react'
import "./CheckHealth.css";

import { Link } from "react-router-dom";

const CheckHealth = () => {

  // const handleClick = () => alert('Please connect to the server and turn on your hardware device ');

  const handleClick = () => {
    window.location.href = 'http://192.168.43.172/';
  };


 
  return (
   <>
   <section id='check'>

   <div className='check'>

  
   <Link to="#" id="button2" onClick={handleClick}>Check Your Health</Link>
   
    

    </div>

    </section>
    

   </>
   
  )
}

export default CheckHealth