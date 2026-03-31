import { MainLayout } from '@/components/layout/MainLayout';
import { SkillCard } from '@/components/common/SkillCard';
import { SKILLS } from '@/data/skills';
import '@/styles/skills.css';

export default function SkillsPage() {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  
  return (
    <MainLayout>
      <div className="skills-container">
        <section className="skills-header-section">
          <h1 className="skills-page-title">Technical Skills</h1>
          <p className="skills-page-subtitle">
            My expertise across different technologies and frameworks
          </p>
        </section>

        {categories.map((category) => {
          const categorySkills = SKILLS.filter(s => s.category === category);
          return (
            <section key={category} className="skills-category-section">
              <h2 className="category-title">{category}</h2>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </MainLayout>
  );
}
