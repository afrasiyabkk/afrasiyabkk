import { MainLayout } from '@/components/layout/MainLayout';
import { PERSONAL_INFO } from '@/data/personal-info';
import { getYearsOfExperience } from '@/lib/utils';
import '@/styles/home.css';

export default function Home() {
  const yearsOfExperience = getYearsOfExperience();
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
            Full-stack developer with over {yearsOfExperience} years of experience developing web applications,
            backend and frontend systems, Android applications, API integration, automation solutions, and AI-based
            tools. I hold a master's degree in Finance and International Economics, which
            allows me to combine a solid analytical foundation with advanced technical skills.
            I currently work as a Full-Stack Developer and Team Lead, where I manage junior developers,
            collaborate directly with clients, and oversee the end-to-end development of complex
            software. I have also promoted the adoption of AI-assisted development practices within the company,
            mastering advanced prompt engineering techniques to leverage GitHub Copilot to its full
            potential, significantly improving team productivity and code quality.
            I am often the go-to person for solving complex technical issues, thanks to
            a structured approach to problem analysis and the ability to provide efficient and scalable solutions,
            even in high-pressure environments.
          </p>
        </section>

        {/* Action Buttons */}
        <section className="action-buttons">
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
