import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import CheckHealth from "./CheckHealth";
import HealthTips from "./HealthTips";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Navbar/> 

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/checkhealth" element={<CheckHealth/>} />
        <Route path="/healthtips" element={<HealthTips/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      {/* <Footer/>  */}
    </>
  );
};

export default App;
