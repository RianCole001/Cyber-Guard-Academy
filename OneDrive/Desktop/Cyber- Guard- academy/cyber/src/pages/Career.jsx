import React from 'react';
import Footer from '../components/Footer'; 
// Use the actual image file present in src/assets (courseHeader.png)
import courseHeaderImage from '../assets/courseHeader.png';

// --- Data Definitions ---
const intakeData = [
  { title: "Full-time Remote", duration: "20 Weeks", mode: "100% Online | Mon - Fri 9 am - 5 pm GMT", startDate: "January 15th, 2026", theme: "bg-info-subtle" },
  { title: "Part-time Remote", duration: "30 Weeks", mode: "100% Online | Mon & Wed 6 pm - 9 pm GMT", startDate: "January 15th, 2026", theme: "bg-success-subtle" },
];

const learningOutcomes = [
  "Advanced Network Reconnaissance", "Web Application Hacking (OWASP Top 10)", 
  "Buffer Overflows & Exploit Development", "Wireless and Cloud Security Auditing", 
  "Professional Penetration Test Reporting", "Incident Response & Forensics"
];

const curriculumModules = [
  { title: "Module 1: Foundations & Systems Security", content: "Deep dive into Linux command line, core networking, and secure system administration (e.g., Python scripting)." },
  { title: "Module 2: Network & Infrastructure Hacking", content: "Scanning, enumeration, and vulnerability assessment using industry tools like Nmap and Metasploit." },
  { title: "Module 3: Web and Application Exploitation", content: "Hands-on practice exploiting common web vulnerabilities (SQLi, XSS, CSRF) on live training platforms." },
  { title: "Module 4: Post-Exploitation & Defense", content: "Maintaining persistence, privilege escalation, log analysis, and professional reporting standards." },
];

const faqs = [
  { question: "Do I need to buy special equipment?", answer: "No. All lab environments and necessary tools are provided via our cloud-based Cyber Range access." },
  { question: "What certifications does this prepare me for?", answer: "This course aligns with objectives for the CEH, eJPT, and serves as excellent preparatory material for the highly demanding OSCP exam." },
];
// -------------------------

const CareerPath = () => {
  // Define custom styles for the dark theme accent colors
  const accentColor = '#00e0ff';
  const urgentColor = '#ff4d4d';

  return (
    <div className="bg-dark text-white"> 
      <main>
        
        {/* 1. Header & Intake Cards (Moringa Style) */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #2c2c54 100%)' }}>
          <div className="container text-center py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="display-4 fw-bold mb-3" style={{ color: accentColor }}>
                  Ethical Hacking & Penetration Testing Specialist Track
                </h1>
                <p className="lead text-white-50 mb-5">
                  Step into the world of offensive cybersecurity with our comprehensive Specialist Track, ideal for professionals ready to level up. You'll master **hands-on skills** through guided labs and real-world Capstone projects.
                </p>
              </div>
            </div>

            <h2 className="h4 text-light mb-4" style={{ color: accentColor }}>2026 Intakes in Progress</h2> 

            {/* Intake Cards */}
            <div className="row justify-content-center g-4">
              {intakeData.map((data, index) => (
                <div key={index} className="col-md-6 col-lg-5">
                  <div className={`card ${data.theme} shadow border-0 h-100`}>
                    <div className="card-body text-dark text-start">
                      <h3 className="card-title fw-bold mb-3">{data.title}</h3>
                      <p className="card-text">Start Date: **{data.startDate}**</p>
                      <p className="card-text">Course Duration: **{data.duration}**</p>
                      <p className="card-text">Mode of Learning: **{data.mode}**</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 2. What You Will Master (Learning Outcomes) */}
        <section id="outcomes" className="py-5 bg-dark-subtle">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}>What You Will Master</h2>
            <div className="row g-3 justify-content-center">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="bg-secondary p-3 rounded text-start border-start border-3" style={{ borderColor: accentColor }}>
                    <p className="mb-0 fw-light"><span className="text-info me-2">✅</span>{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Detailed Curriculum Breakdown */}
        <section id="curriculum" className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}>Detailed Curriculum Breakdown</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {curriculumModules.map((module, index) => (
                  <div key={index} className="card bg-secondary text-white mb-3 shadow border-0">
                    <div className="card-body text-start">
                      <h3 className="h5 card-title fw-bold" style={{ color: accentColor }}>{module.title}</h3>
                      <p className="card-text text-white-50">{module.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. Enrollment & Prerequisites CTA */}
        <section id="prereq" className="py-5 bg-dark-subtle text-center">
          <div className="container">
            <h2 className="mb-4" style={{ color: urgentColor }}>Ready to Launch Your Career?</h2>
            <p className="lead mb-4 text-light">
              This track is ideal for IT professionals, system administrators, and developers looking to pivot into offensive security roles. 
              <br />**Prerequisite:** Basic understanding of networking and Linux command line usage is highly recommended.
            </p>
            <a href="#apply" className="btn btn-lg fw-bold" style={{ backgroundColor: urgentColor, color: 'white' }}>
              Secure Your Spot Today
            </a>
          </div>
        </section>
        
        {/* 5. FAQs Section */}
        <section id="faqs" className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}>Frequently Asked Questions</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {faqs.map((faq, index) => (
                  <div key={index} className="card bg-secondary text-white mb-3 border-0">
                    <div className="card-body text-start">
                      <h4 className="h6 card-title fw-bold" style={{ color: 'white' }}>Q: {faq.question}</h4>
                      <p className="card-text text-white-50">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerPath;