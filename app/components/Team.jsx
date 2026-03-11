'use client';

import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    initials: 'MC',
    name: 'Marcus Cole',
    role: 'Master Barber',
    experience: '12 years experience',
  },
  {
    initials: 'DR',
    name: 'Dante Rivera',
    role: 'Senior Barber',
    experience: '8 years experience',
  },
  {
    initials: 'JB',
    name: 'Jake Brennan',
    role: 'Barber',
    experience: '5 years experience',
  },
  {
    initials: 'SO',
    name: 'Sam Okafor',
    role: 'Fade Specialist',
    experience: '6 years experience',
  },
];

export default function Team() {
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
    <section id="team" className="team" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Meet The Team</h2>
        <p className="section-subtitle reveal">
          Master barbers dedicated to their craft
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card reveal">
              <div className="team-image">
                <div className="team-placeholder">{member.initials}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <span className="team-exp">{member.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
