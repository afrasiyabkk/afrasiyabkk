'use client';

import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/personal-info';
import '@/styles/footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left: Name & Description */}
          <div className="footer-section">
            <h3>{PERSONAL_INFO.fullName}</h3>
            <p className="footer-description">
              Full Stack Developer
            </p>
            <div className="footer-contact">
              <p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-contact-link">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="footer-contact-link">
                  {PERSONAL_INFO.phone}
                </a>
              </p>
              <p className="footer-address">{PERSONAL_INFO.address}</p>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              {PERSONAL_INFO.github && (
                <Link
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </Link>
              )}
              {PERSONAL_INFO.linkedin && (
                <Link
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </Link>
              )}
              {PERSONAL_INFO.twitter && (
                <Link
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Twitter
                </Link>
              )}
              {PERSONAL_INFO.discord && (
                <Link
                  href={PERSONAL_INFO.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Discord
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="footer-divider">
        <p className="footer-copyright">
          © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
