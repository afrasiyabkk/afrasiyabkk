'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { usePersonalInfo, useAboutPageData } from '@/hooks/usePersonalInfo';
import '@/styles/about.css';

export default function AboutPage() {
  const personalInfo = usePersonalInfo();
  const pageData = useAboutPageData();

  return (
    <MainLayout>
      <div className="about-container">
        <section className="about-header-section">
          <h1 className="about-page-title">{pageData.title}</h1>
          <p className="about-page-subtitle">
            {pageData.subtitle}
          </p>
        </section>

        <section className="about-content">
          <div className="about-text-section">
            <h2 className="about-section-title">{pageData.journeyTitle}</h2>
            <p className="about-text">
              {pageData.journeyParagraph1}
            </p>
            <p className="about-text">
              {pageData.journeyParagraph2}
            </p>
          </div>

          <div className="about-interests-section">
            <h2 className="about-section-title">{pageData.beyondCodeTitle}</h2>
            
            <div className="interest-item">
              <h3 className="interest-title">{pageData.interests.tableTennis.title}</h3>
              <p className="interest-description">
                {pageData.interests.tableTennis.description}
              </p>
              <p className="interest-contact">
                {pageData.interests.tableTennis.contactText}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                {pageData.interests.tableTennis.contactLink}
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </p>
            </div>

            <div className="interest-item">
              <h3 className="interest-title">{pageData.interests.dota2.title}</h3>
              <p className="interest-description">
                {pageData.interests.dota2.description}
              </p>
              <p className="interest-contact">
                {pageData.interests.dota2.contactText}
                <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
                {pageData.interests.dota2.contactLink}
              </p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>{pageData.connectTitle}</h2>
          <p>{pageData.connectSubtitle}</p>
          <div className="cta-links">
            <a href={`mailto:${personalInfo.email}`} className="cta-button">
              {pageData.ctaButtons.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="cta-button">
              {pageData.ctaButtons.phone}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button">
              {pageData.ctaButtons.linkedin}
            </a>
            <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" className="cta-button">
              {pageData.ctaButtons.discord}
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
