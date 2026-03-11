'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '✂️',
    title: 'Classic Cut',
    description: 'Traditional haircut with modern precision, includes consultation and styling.',
    price: '$28',
  },
  {
    icon: '🪒',
    title: 'Straight Razor Shave',
    description: 'Hot towel treatment with a luxurious straight razor shave experience.',
    price: '$35',
  },
  {
    icon: '✨',
    title: 'Cut & Shave Combo',
    description: 'The complete package: precision haircut paired with our signature shave.',
    price: '$58',
  },
  {
    icon: '🧔',
    title: 'Beard Trim & Shape',
    description: 'Expert beard sculpting and trimming for the distinguished gentleman.',
    price: '$22',
  },
  {
    icon: '👦',
    title: 'Kids Cut',
    description: 'Patient, friendly service for our younger clients. Ages 12 and under.',
    price: '$18',
  },
  {
    icon: '👑',
    title: 'VIP Experience',
    description: 'Full service: cut, shave, facial treatment, and scalp massage.',
    price: '$85',
  },
];

export default function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Our Services</h2>
        <p className="section-subtitle reveal">
          Premium cuts and grooming services tailored to perfection
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
