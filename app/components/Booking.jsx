'use client';

import { useState, useEffect, useRef } from 'react';

export default function Booking() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [minDate, setMinDate] = useState('');
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);

    // Scroll reveal
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);

    setTimeout(() => {
      setIsConfirmed(false);
      formRef.current?.reset();
    }, 3000);
  };

  return (
    <section id="booking" className="booking" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Book Your Appointment</h2>
        <p className="section-subtitle reveal">
          Reserve your spot and experience the difference
        </p>
        <form
          className="booking-form reveal"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="classic">Classic Cut - $28</option>
                <option value="shave">Straight Razor Shave - $35</option>
                <option value="combo">Cut & Shave Combo - $58</option>
                <option value="beard">Beard Trim & Shape - $22</option>
                <option value="kids">Kids Cut - $18</option>
                <option value="vip">VIP Experience - $85</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="barber">Barber</label>
              <select id="barber" name="barber" required>
                <option value="">Select a barber</option>
                <option value="marcus">Marcus Cole</option>
                <option value="dante">Dante Rivera</option>
                <option value="jake">Jake Brennan</option>
                <option value="sam">Sam Okafor</option>
                <option value="any">No Preference</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" min={minDate} required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" required />
            </div>
          </div>
          <button
            type="submit"
            className={`btn-submit ${isConfirmed ? 'confirmed' : ''}`}
            disabled={isConfirmed}
          >
            <span className="btn-text">Book Appointment</span>
            <span className="btn-success">✓ Booking Confirmed!</span>
          </button>
        </form>
      </div>
    </section>
  );
}
