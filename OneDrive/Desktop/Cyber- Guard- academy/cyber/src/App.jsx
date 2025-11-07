import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Nav.jsx';
import Hero from "./components/Hero.jsx";   
import logo from './assets/logo.png';
import Roles from "./components/Roles.jsx";
import Testimonials from "./components/Testimonials.jsx";
import USP from "./components/USP.jsx";
import CTA from "./CTA.jsx";    

function App() {
  return (
    <Router>
      <Navbar logo={logo} />
       <Hero />
       <Roles />
         <USP />
         <Testimonials />
         <CTA />
    </Router>
   
  );
}

export default App;
