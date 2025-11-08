import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-column brand-info">
          <h3>Cyber Guard Academy</h3>
          <p>Forging the next generation of certified, battle-ready cybersecurity professionals.</p>
          <p>&copy; {new Date().getFullYear()} Cyber Guard Academy. All rights reserved.</p>
        </div>

        <div className="footer-column links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#courses">Curriculum</a></li>
            <li><a href="#roles">Career Paths</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column social-column">
          <h4>Connect</h4>
          <div className="social-icons">
            {/* Placeholder for actual social links/icons */}
            <a href="https://linkedin.com">LinkedIn 🔗</a>
            <a href="https://twitter.com">Twitter 🐦</a>
            <a href="https://youtube.com">YouTube ▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;