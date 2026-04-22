'use client';

import Link from 'next/link';
import { usePersonalInfo } from '@/hooks/usePersonalInfo';
import '@/styles/footer.css';

export const Footer = () => {
  const personalInfo = usePersonalInfo();
  const currentYear = new Date().getFullYear();

  const iconSize = 20;

  // Icon components
  const GitHubIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-0.5 11-4a7 7 0 00-3-2" />
    </svg>
  );

  const DiscordIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4c-.13.25-.27.64-.38 1.24-1.13-.17-2.25-.17-3.36 0-.11-.6-.25-.99-.38-1.24-1.5.26-2.94.71-4.27 1.33.27 4.5 2.04 8.93 5.27 10.86-1.12.86-2.33 1.64-3.59 2.22.7.15 1.37.42 2.04.69.67-.27 1.34-.54 2.04-.69-1.26-.58-2.47-1.36-3.59-2.22 3.23-1.93 5-6.36 5.27-10.86zM8.68 14.81c-1.06 0-1.92-.97-1.92-2.15s.86-2.15 1.92-2.15c1.11 0 1.98.97 1.92 2.15 0 1.18-.86 2.15-1.92 2.15m6.64 0c-1.06 0-1.92-.97-1.92-2.15s.86-2.15 1.92-2.15c1.11 0 1.98.97 1.92 2.15 0 1.18-.85 2.15-1.92 2.15z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-flat">
          {/* Left: Name */}
          <div className="footer-name">
            <h3>{personalInfo.fullName}</h3>
          </div>

          {/* Right: Social & Contact Icons */}
          <div className="footer-icons">
            {personalInfo.github && (
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                title="GitHub"
              >
                <GitHubIcon />
              </Link>
            )}
            {personalInfo.linkedin && (
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            )}
            {personalInfo.twitter && (
              <Link
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                title="Twitter"
              >
                <TwitterIcon />
              </Link>
            )}
            {personalInfo.discord && (
              <Link
                href={personalInfo.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                title="Discord"
              >
                <DiscordIcon />
              </Link>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-icon-link"
              title={personalInfo.email}
            >
              <EmailIcon />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="footer-icon-link"
              title={personalInfo.phone}
            >
              <PhoneIcon />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-divider">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
