'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { EducationCard } from '@/components/common/EducationCard';
import { useEducations, useEducationPageData } from '@/hooks/usePersonalInfo';
import '@/styles/education.css';

export default function EducationPage() {
  const educations = useEducations();
  const pageData = useEducationPageData();

  return (
    <MainLayout>
      <div className="education-container">
        <section className="education-header-section">
          <h1 className="education-page-title">{pageData.title}</h1>
          <p className="education-page-subtitle">{pageData.subtitle}</p>
        </section>

        <section className="education-timeline">
          {educations.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
