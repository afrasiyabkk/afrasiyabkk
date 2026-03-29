'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Nav } from './Nav';
import '@/styles/header.css';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Add/remove menu-open class to body for CSS to respond
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Left Side - Logo/Name */}
        <Link href="/" className="header-logo" onClick={() => setMobileMenuOpen(false)}>
          AFRASIYAB
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>

        {/* Right Side - Navigation */}
        <Nav isOpen={mobileMenuOpen} onNavClick={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  );
};
