import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/ai.png'; 
import './heroStyles.css'; 

const Hero = () => {
  return (
    <section className="hero-section">
      {/* 1. Background Image Container */}
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* 2. Content Overlay */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Master Digital Warfare. <br />
          Become a Cyber Guard and Professional Hacker.
        </h1>
        <p className="hero-subtext">
          Elite training in ethical hacking, advanced threat detection, and defense architecture. Learn from industry leaders with real-world, hands-on labs.
        </p>
        <div className="hero-cta-group">
          <a href="#courses" className="btn btn-primary">
            Explore Courses
          </a>
          <a href="#about" className="btn btn-secondary">
            View Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;