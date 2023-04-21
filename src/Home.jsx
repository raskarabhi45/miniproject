import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <>
    <main>
        <section id='home'>
            <div className="div1">
            <h3 id="h31">We Give Solution</h3> 
            <h3 id="h32">To your Pain</h3>
            </div>
            <div className="content">
                <h1>We are Here to make doctors life easy </h1>
                <h1> and patient more healthy....</h1>
            </div>
            <div className="button">
                <Link to="/checkhealth" id="button1">Check-Now</Link>
            </div>
        </section>
        
    </main>
</>
  )
}

export default Home;