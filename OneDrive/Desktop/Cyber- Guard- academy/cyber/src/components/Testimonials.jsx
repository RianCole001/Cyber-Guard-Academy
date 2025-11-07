import React from 'react';
import './Testimonials.css'; // For styling the layout

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Within six months of completing the Pen-Testing track, I landed my dream role as a Security Analyst. The Cyber Range labs are truly game-changing—nothing else compares to the real-world experience I gained here.",
      name: "Omindo simon.",
      title: "Security Analyst, Fortune 500 Tech",
      avatar: "👤" // Placeholder for an image or initial
    },
    {
      quote: "The instructor support was phenomenal. They didn't just teach the material; they taught us how to think like security professionals. I passed my certification exam on the first try thanks to their rigorous curriculum.",
      name: "Sarah K.",
      title: "Cloud Security Specialist",
      avatar: "👩‍💻"
    },
    {
      quote: "I came from a non-technical background, and the foundational track was perfectly structured. I now feel confident and capable in my new role as a SOC Monitor. Best investment I've ever made in my career.",
      name: "David T.",
      title: "SOC Monitor",
      avatar: "👨‍🎓"
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Trusted by Tomorrow's Cyber Guardians</h2>
      <p className="testimonials-subtitle">Hear directly from graduates who launched high-impact cybersecurity careers with the Academy.</p>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-footer">
              <span className="testimonial-avatar">{testimonial.avatar}</span>
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;