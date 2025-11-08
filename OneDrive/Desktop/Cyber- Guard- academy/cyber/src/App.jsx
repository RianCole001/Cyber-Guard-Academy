import React from "react";
// Import Routes and Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// --- Landing Page Components ---
import Navbar from './components/Nav.jsx';
import Hero from "./components/Hero.jsx"; 
import Roles from "./components/Roles.jsx";
import Testimonials from "./components/Testimonials.jsx";
import USP from "./components/usp.jsx";
import Cta from "./components/Cta.jsx";
import CareerPath from "./pages/Careerpath.jsx";
import Footer from "./components/Footer.jsx";
import logo from './assets/logo.png';
import Career from "./pages/Career.jsx"; // Importing Career component

// 1. Component for the main landing page content flow (excluding Navbar and Footer)
const HomeContent = () => (
    <>
        <Hero />
        <Roles />
        <USP />
        <Testimonials />
        <Cta />
    </>
);


function App() {
  return (
    <Router>
      {/* The Navbar is included here to appear on both the Home route and the CareerPath route,
        while maintaining the flow you originally intended. 
        Note: The logo prop has been removed as per the decision to handle it internally.
      */}
      <Navbar logo={logo} /> 
      
      {/* Use Routes to define different views based on the URL */}
      <Routes>
          {/* Route for the Main Landing Page (accessible at '/') */}
          <Route 
              path="/" 
              element={
                  <>
                      <HomeContent />
                      <Footer/> 
                  </>
              } 
          />
          {/* Route for the Courses Page (accessible at '/courses') */}
          <Route 
              path="/courses" 
              element={<Career />} 
          />
      </Routes>
    </Router>
  );
}

export default App;