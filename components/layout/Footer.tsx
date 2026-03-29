'use client';

import Link from 'next/link';
import '@/styles/footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left: Name & Description */}
          <div className="footer-section">
            <h3>Afrasiyab Nangyal Kakakhel</h3>
            <p className="footer-description">
              Full Stack Developer
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="footer-divider">
        <p className="footer-copyright">
          © {currentYear} Afrasiyab Nangyal Kakakhel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
