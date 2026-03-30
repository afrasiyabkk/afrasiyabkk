import { MainLayout } from '@/components/layout/MainLayout';
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
                src="https://media.licdn.com/dms/image/v2/D4E35AQEwCp8SCSQ4JQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1655401649125?e=1775404800&v=beta&t=EZKE6mQjeoG7AyQslkCgg_-9Ykpmmo1dqy3RXfJ9KCI"
                alt="Profile"
              />
            </div>
          </div>

          {/* Name & Designation */}
          <div className="hero-content">
            <h1 className="hero-name">
              Afrasiyab Nangyal Kakakhel
            </h1>
            <p className="hero-designation">
              Full Stack Developer | Team Lead
            </p>
            <h3 className="skills-heading">
              Skills
            </h3>
            <p className="hero-designation">
              Java | Springboot | Python | Django | PHP | Laravel | React | Next.js | Vuejs | Javascript | Typescript | Jquery
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
