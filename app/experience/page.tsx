'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { ExperienceCard } from '@/components/common/ExperienceCard';
import { useExperiences, useExperiencePageData } from '@/hooks/usePersonalInfo';
import '@/styles/experience.css';

export default function ExperiencePage() {
  const experiences = useExperiences();
  const pageData = useExperiencePageData();

  return (
    <MainLayout>
      <div className="experience-container">
        <section className="experience-header-section">
          <h1 className="experience-page-title">{pageData.title}</h1>
          <p className="experience-page-subtitle">{pageData.subtitle}</p>
        </section>

        <section className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
