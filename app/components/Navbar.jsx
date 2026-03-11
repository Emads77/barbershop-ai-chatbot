'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo">
          Blade & Ember
        </Link>
        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#team" onClick={closeMenu}>Team</a></li>
          <li><a href="#booking" className="btn-nav" onClick={closeMenu}>Book Now</a></li>
        </ul>
      </div>
    </nav>
  );
}
