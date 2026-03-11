'use client';

import { useEffect, useRef } from 'react';

const perks = [
  {
    icon: '🏆',
    title: 'Premium Products',
    description: 'Only the finest grooming products touch your hair',
  },
  {
    icon: '🎯',
    title: 'Precision Every Time',
    description: 'Meticulous attention to every detail of your cut',
  },
  {
    icon: '☕',
    title: 'Relaxed Atmosphere',
    description: 'Unwind in our comfortable, welcoming space',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-box">
              <span className="about-emoji">💈</span>
            </div>
            <div className="satisfaction-badge">
              <span className="badge-check">✓</span>
              <span>100% Satisfaction</span>
            </div>
          </div>
          <div className="about-content reveal">
            <h2 className="section-title">Crafted With Pride</h2>
            <p className="about-text">
              At Blade & Ember, we believe a great haircut is more than just a
              service—it&apos;s an experience. Our skilled barbers combine time-honored
              techniques with modern styles to deliver cuts that make you feel
              confident and look sharp.
            </p>
            <p className="about-text">
              Since 2015, we&apos;ve been the go-to destination for gentlemen who
              appreciate quality grooming in a welcoming atmosphere.
            </p>
            <div className="perks-grid">
              {perks.map((perk, index) => (
                <div key={index} className="perk-card">
                  <span className="perk-icon">{perk.icon}</span>
                  <h4>{perk.title}</h4>
                  <p>{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
