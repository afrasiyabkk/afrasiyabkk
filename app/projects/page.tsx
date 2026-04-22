'use client';

import { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { useProjects, useProjectsPageData } from '@/hooks/usePersonalInfo';
import '@/styles/projects.css';

export default function ProjectsPage() {
  const projects = useProjects();
  const pageData = useProjectsPageData();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  // Get unique categories and companies
  const categories = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach(p => p.categories.forEach(cat => cats.add(cat)));
    return Array.from(cats).sort();
  }, [projects]);

  const companies = useMemo(() => {
    const comps = new Set<string>();
    projects.forEach(p => comps.add(p.company));
    return Array.from(comps).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategories.length === 0 || 
        project.categories.some(cat => selectedCategories.includes(cat));
      const companyMatch = selectedCompanies.length === 0 || 
        selectedCompanies.includes(project.company);
      return categoryMatch && companyMatch;
    });
  }, [selectedCategories, selectedCompanies, projects]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleCompany = (company: string) => {
    setSelectedCompanies(prev =>
      prev.includes(company)
        ? prev.filter(c => c !== company)
        : [...prev, company]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedCompanies([]);
  };

  return (
    <MainLayout>
      <div className="projects-container">
        <section className="projects-header">
          <h1 className="projects-title">{pageData.title}</h1>
          <p className="projects-subtitle">{pageData.subtitle}</p>
        </section>

        {/* Filters Accordion */}
        <section className="projects-filters-accordion">
          <button 
            className="accordion-header"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span className="accordion-title">{pageData.filterTitle}</span>
            <span className={`accordion-icon ${filterOpen ? 'open' : ''}`}>▼</span>
          </button>

          {filterOpen && (
            <div className="accordion-content">
              <div className="filter-section">
                <h3 className="filter-title">{pageData.categoriesLabel}</h3>
                <div className="filter-options">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategories.includes(category) ? 'active' : ''}`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">{pageData.companyLabel}</h3>
                <div className="filter-options">
                  {companies.map(company => (
                    <button
                      key={company}
                      className={`filter-btn ${selectedCompanies.includes(company) ? 'active' : ''}`}
                      onClick={() => toggleCompany(company)}
                    >
                      {company}
                    </button>
                  ))}
                </div>
              </div>

              {(selectedCategories.length > 0 || selectedCompanies.length > 0) && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  {pageData.clearFiltersBtn}
                </button>
              )}
            </div>
          )}
        </section>

        {/* Projects Count */}
        <div className="projects-count">
          {pageData.showingText.replace('{current}', String(filteredProjects.length)).replace('{total}', String(projects.length))}
        </div>

        {/* Projects Grid */}
        <section className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="no-projects">
              <p>{pageData.noProjectsText}</p>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
