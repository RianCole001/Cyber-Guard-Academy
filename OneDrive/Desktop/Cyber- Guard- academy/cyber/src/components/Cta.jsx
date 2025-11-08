import React from 'react';
import './CTA.css'; 

const Cta = () => {
  return (
    <section className="final-cta-section">
      <div className="cta-content-wrapper">
        <h2 className="cta-headline">Ready to Join the Elite?</h2>
        <p className="cta-subtext">The digital battlefield is expanding, and the demand for certified Cyber Guards is critical. Don't wait to secure your future—enroll today.</p>
        <a href="#register" className="btn btn-cta-primary">
          **Start Your Enrollment Now**
        </a>
      </div>
    </section>
  );
};
export default Cta;