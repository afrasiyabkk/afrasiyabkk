'use client';

import { useState, useEffect } from 'react';
import { getImagePath } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { CVDownloadButton } from '@/components/common/CVDownloadButton';
import { CopyButton } from '@/components/common/CopyButton';
import { usePersonalInfo, usePersonalBio } from '@/hooks/usePersonalInfo';
import '@/styles/home.css';

export default function Home() {
  const personalInfo = usePersonalInfo();
  const bioText = usePersonalBio();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <MainLayout>
        <div className="home-container">
          {/* Hero Section - Picture & Name */}
          <section className="hero-section">
            {/* Picture */}
            <div className="hero-picture">
              <div className="hero-picture-frame">
                <img
                  src={getImagePath(personalInfo.profileImage)}
                  alt="Profile"
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Name & Designation */}
            <div className="hero-content">
              <h1 className="hero-name">
                {personalInfo.fullName}
              </h1>
              <p className="hero-designation">
                {personalInfo.designation}
              </p>
              <h3 className="skills-heading">
                Email
              </h3>
              <p className="hero-designation">
                {personalInfo.email}
              </p>
              <h3 className="skills-heading">
                Phone / Whatsapp
              </h3>
              <p className="hero-designation">
                {personalInfo.phone}
              </p>
              <h3 className="skills-heading">
                Address
              </h3>
              <p className="hero-designation">
                {personalInfo.address}
              </p>
              <CopyButton text={personalInfo.address} />
              <h3 className="skills-heading">
                Skills
              </h3>
              <p className="hero-designation">
                {personalInfo.skills}
              </p>
              <CopyButton text={personalInfo.skills} />
            </div>
          </section>

          {/* Bio Section */}
          <section className="bio-section">
            <p className="bio-text">
              {bioText}
            </p>
            <CopyButton text={bioText} />
          </section>

          {/* Action Buttons */}
          <section className="action-buttons">
            <CVDownloadButton />
            <a
              href="/projects"
              className="action-btn"
            >
              View Projects
            </a>
            <a
              href="/experience"
              className="action-btn"
            >
              Experience
            </a>
            <a
              href="/skills"
              className="action-btn"
            >
              Skills
            </a>
            <a
              href="/contact"
              className="action-btn primary"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </MainLayout>

      {/* Full Image Modal - Rendered via Portal */}
      {isModalOpen && typeof window !== 'undefined' &&
        createPortal(
          <div className="image-modal" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={getImagePath(personalInfo.profileImage)}
                alt="Profile"
                className="modal-image"
              />

              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
