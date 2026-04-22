'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { SkillCard } from '@/components/common/SkillCard';
import { useSkills, useSkillsPageData, useCategoryTranslations } from '@/hooks/usePersonalInfo';
import '@/styles/skills.css';

export default function SkillsPage() {
  const skills = useSkills();
  const pageData = useSkillsPageData();
  const categoryTranslations = useCategoryTranslations();

  // Define the preferred order of categories
  const categoryOrder = ['Backend', 'Frontend', 'Game Development', 'Database', 'Mobile Development', 'Desktop', 'External Services', 'DevOps', 'Plugins', 'Tools', 'Other'];
  
  // Group skills by category and sort them
  const allCategories = Array.from(new Set(skills.map(s => s.category)));
  const categories = allCategories.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    
    // If both are in the preferred order, sort by that order
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    // If only a is in the preferred order, it comes first
    if (aIndex !== -1) {
      return -1;
    }
    // If only b is in the preferred order, it comes first
    if (bIndex !== -1) {
      return 1;
    }
    // For remaining categories, maintain alphabetical order
    return a.localeCompare(b);
  });
  
  return (
    <MainLayout>
      <div className="skills-container">
        <section className="skills-header-section">
          <h1 className="skills-page-title">{pageData.title}</h1>
          <p className="skills-page-subtitle">{pageData.subtitle}</p>
        </section>

        {categories.map((category) => {
          const categorySkills = skills.filter(s => s.category === category);
          return (
            <section key={category} className="skills-category-section">
              <h2 className="category-title">{categoryTranslations[category]}</h2>
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
