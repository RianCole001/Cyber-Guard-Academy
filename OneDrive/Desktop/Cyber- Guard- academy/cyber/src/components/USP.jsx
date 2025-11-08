import React from 'react';
import './usp.css'; // We will define the dark theme styles here

const Usp = () => {
  const sellingPoints = [
    { 
      title: "Hands-On Cyber Range Labs", 
      icon: "🧪", 
      description: "Learn by doing. Train in our isolated, real-world cyber environments (Cyber Range) to safely practice advanced hacking and defense techniques without consequence. Over 80% of training time is dedicated to practical labs." 
    },
    { 
      title: "Certified Industry Mentors", 
      icon: "🎓", 
      description: "Be guided by veterans holding top-tier certifications (OSCP, CISSP, CEH). Our instructors are active security professionals who bring current threat intelligence directly into the classroom." 
    },
    { 
      title: "Career & Certification Focus", 
      icon: "💼", 
      description: "Our curriculum is mapped directly to industry demand. Earn essential prerequisites for certifications like CompTIA Security+, CEH, and CISSP, ensuring immediate career readiness." 
    },
  ];

  return (
    <section className="usp-dark-section"> 
      <h2 className="usp-dark-title">Why Cyber Guard Academy is Your Best Defense</h2>
      <p className="usp-dark-subtitle">We don't just teach theory; we forge certified, battle-ready Cyber Guards.</p>

      <div className="usp-dark-grid">
        {sellingPoints.map((point, index) => (
          <div key={index} className="usp-dark-card">
            <span className="usp-dark-icon">{point.icon}</span>
            <h3 className="usp-dark-card-title">{point.title}</h3>
            <p className="usp-dark-card-description">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usp;