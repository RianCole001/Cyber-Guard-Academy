import React from 'react';
import './Roles.css'; 

const Roles = () => {
  // Array of roles to map over
  const cyberRoles = [
    { title: "Ethical Hacker (Pen-Tester)", icon: "💻", description: "You are the offense. Systematically attack defenses to find and patch vulnerabilities before malicious actors can exploit them." },
    { title: "Security Analyst (SOC)", icon: "🚨", description: "You are the monitor. Analyze real-time security alerts, investigate incidents, and manage threat detection systems." },
    { title: "Security Engineer", icon: "⚙️", description: "You are the builder. Design, implement, and maintain secure network architectures, firewalls, and encryption protocols." },
    { title: "Cyber Forensic Investigator", icon: "🔍", description: "You are the detective. Recover and analyze digital evidence from compromised systems to trace attacks and support legal action." },
    { title: "Cloud Security Specialist", icon: "☁️", description: "You are the shield for the cloud. Secure data and applications hosted on platforms like AWS, Azure, and Google Cloud." },
    { title: "Black Hat(EVIL Hacker)", icon: "📊", description: "You are the Evil hacker. Oversee the entire organizational security strategy, exploit apis,hack without limitations  and erase your footprints." },
  ];

  return (
    <section className="roles-section">
      <h2 className="section-title">What Will You Become?</h2>
      <p className="section-subtitle">The Cyber Guard Academy prepares you for the most demanded, high-impact roles in the digital defense industry.</p>

      <div className="roles-grid">
        {cyberRoles.map((role, index) => (
          <div key={index} className="role-card">
            <span className="role-icon">{role.icon}</span>
            <h3 className="role-title">{role.title}</h3>
            <p className="role-description">{role.description}</p>
          </div>
        ))}
      </div>
      
      <a href="#enrollment" className="btn btn-learn-more">
        See How to Launch Your Career
      </a>
    </section>
  );
};

export default Roles;