import { MainLayout } from '@/components/layout/MainLayout';
import { EducationCard } from '@/components/common/EducationCard';
import { EDUCATIONS } from '@/data/education';
import '@/styles/education.css';

export default function EducationPage() {
  return (
    <MainLayout>
      <div className="education-container">
        <section className="education-header-section">
          <h1 className="education-page-title">Education</h1>
          <p className="education-page-subtitle">
            My academic background and qualifications
          </p>
        </section>

        <section className="education-timeline">
          {EDUCATIONS.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
