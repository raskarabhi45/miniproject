import React from 'react'
import { BrowserRouter as  Switch, Route,Router } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import CheckHealth from './CheckHealth';
import HealthTips from './HealthTips';
import Footer from './Footer';


const App = () => {
  return (
    <>
     <Navbar/> 
     {/* <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/checkhealth" component={CheckHealth} />
        <Route path="/healthtips" component={HealthTips} />
       
      </Switch>
    </Router> */}
     <Footer/> 
  
    </>
  )
}

export default App;

