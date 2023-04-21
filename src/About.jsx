import React from 'react'
import "./About.css"
import about_img from "./assets/about.png";

const About = () => {
  return (

    <>
    <section id='about'>
    <div className='about'>
    <div className='content_header'>

    
     <h1>Who We Are...</h1>
     <h1>Welcome to the IOT based  Health Monitoring System </h1>

     <div className='content'>
     <h3>Will Measure</h3> 
     <h3>Heart Rate/Pulse (BPM)</h3>
     <h3>Blood Oxygen Level(SpO2)</h3>
     <h3>Temperature of the body</h3>
     <h3>Room Temperature  </h3>
     <h3>Room Humidity </h3>
     </div>


     </div>

    
    

   <div className='image'>
     <img src={about_img} alt="about_image" />
     </div>

    </div>

    </section>

    
    </>
  )
}

export default About