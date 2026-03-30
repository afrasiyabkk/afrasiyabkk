import { MainLayout } from '@/components/layout/MainLayout';
import { ExperienceCard } from '@/components/common/ExperienceCard';
import { EXPERIENCES } from '@/data/experiences';
import '@/styles/experience.css';

export default function ExperiencePage() {
  return (
    <MainLayout>
      <div className="experience-container">
        <section className="experience-header-section">
          <h1 className="experience-page-title">My Experience</h1>
          <p className="experience-page-subtitle">
            A timeline of my professional journey and career growth
          </p>
        </section>

        <section className="experience-timeline">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
