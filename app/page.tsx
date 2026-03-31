import { MainLayout } from '@/components/layout/MainLayout';
import { CVDownloadButton } from '@/components/common/CVDownloadButton';
import { PERSONAL_INFO, getBioWithYears } from '@/data/personal-info';
import '@/styles/home.css';

export default function Home() {
  const bioText = getBioWithYears();
  return (
    <MainLayout>
      <div className="home-container">
        {/* Hero Section - Picture & Name */}
        <section className="hero-section">
          {/* Picture */}
          <div className="hero-picture">
            <div className="hero-picture-frame">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Profile"
              />
            </div>
          </div>

          {/* Name & Designation */}
          <div className="hero-content">
            <h1 className="hero-name">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="hero-designation">
              {PERSONAL_INFO.designation}
            </p>
            <h3 className="skills-heading">
              Email
            </h3>
            <p className="hero-designation">
              {PERSONAL_INFO.email}
            </p>
            <h3 className="skills-heading">
              Phone / Whatsapp
            </h3>
            <p className="hero-designation">
              {PERSONAL_INFO.phone}
            </p>
            <h3 className="skills-heading">
              Address
            </h3>
            <p className="hero-designation">
              {PERSONAL_INFO.address}
            </p>
            <h3 className="skills-heading">
              Skills
            </h3>
            <p className="hero-designation">
              {PERSONAL_INFO.skills}
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <p className="bio-text">
            {bioText}
          </p>
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
