'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { CVDownloadButton } from '@/components/common/CVDownloadButton';
import { CopyButton } from '@/components/common/CopyButton';
import { usePersonalInfo, usePersonalBio } from '@/hooks/usePersonalInfo';
import '@/styles/home.css';

export default function Home() {
  const personalInfo = usePersonalInfo();
  const bioText = usePersonalBio();

  return (
    <MainLayout>
      <div className="home-container">
        {/* Hero Section - Picture & Name */}
        <section className="hero-section">
          {/* Picture */}
          <div className="hero-picture">
            <div className="hero-picture-frame">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
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
  );
}
