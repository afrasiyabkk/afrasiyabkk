'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { usePersonalInfo } from '@/hooks/usePersonalInfo';
import '@/styles/about.css';

export default function AboutPage() {
  const personalInfo = usePersonalInfo();

  return (
    <MainLayout>
      <div className="about-container">
        <section className="about-header-section">
          <h1 className="about-page-title">About Me</h1>
          <p className="about-page-subtitle">
            Get to know me beyond the code
          </p>
        </section>

        <section className="about-content">
          <div className="about-text-section">
            <h2 className="about-section-title">My Journey</h2>
            <p className="about-text">
              My passion for programming has been the driving force behind my career. What started as 
              self-taught learning transformed into a professional journey that I'm incredibly proud of. I taught 
              myself programming by tackling real-world problems, experimenting with different technologies, and 
              constantly pushing the boundaries of what I could build. This self-driven approach has instilled in me 
              a growth mindset and an unwavering commitment to continuous learning.
            </p>
            <p className="about-text">
              Every challenge I encounter is an opportunity to expand my skill set. Whether it's learning a new 
              framework, mastering advanced architectural patterns, or exploring emerging technologies, I approach 
              each with the same enthusiasm and dedication that got me started. This mindset has not only made me 
              a better engineer but also a more effective team lead who understands the value of perseverance and 
              innovation.
            </p>
          </div>

          <div className="about-interests-section">
            <h2 className="about-section-title">Beyond the Code</h2>
            
            <div className="interest-item">
              <h3 className="interest-title">🏓 Table Tennis</h3>
              <p className="interest-description">
                I'm an avid table tennis player and genuinely enjoy the sport. If you're interested in playing, 
                I'd be more than happy to challenge you! Whether you're a beginner or an experienced player, feel free 
                to get in touch. It's a great way to unwind and connect with fellow enthusiasts.
              </p>
              <p className="interest-contact">
                Contact me at <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> or{' '}
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </p>
            </div>

            <div className="interest-item">
              <h3 className="interest-title">🎮 DOTA 2</h3>
              <p className="interest-description">
                In my downtime, you'll often find me playing DOTA 2. I'm always looking for teammates to join me 
                on epic gaming sessions. Whether you want to climb the ranks, have fun casually, or just enjoy some 
                competitive gaming, I'm in! Connect with me on Discord and let's team up for some memorable matches.
              </p>
              <p className="interest-contact">
                Hit me up on{' '}
                <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
                {' '}for gaming sessions!
              </p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>Let's Connect!</h2>
          <p>Whether it's about code, table tennis, gaming, or just having a chat, I'd love to hear from you.</p>
          <div className="cta-links">
            <a href={`mailto:${personalInfo.email}`} className="cta-button">
              📧 Send Email
            </a>
            <a href={`tel:${personalInfo.phone}`} className="cta-button">
              📱 Call/WhatsApp
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button">
              💼 LinkedIn
            </a>
            <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" className="cta-button">
              💬 Discord
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
