'use client';

import { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { PROJECTS } from '@/data/projects';
import '@/styles/projects.css';

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  // Get unique categories and companies
  const categories = useMemo(() => {
    const cats = new Set<string>();
    PROJECTS.forEach(p => p.categories.forEach(cat => cats.add(cat)));
    return Array.from(cats).sort();
  }, []);

  const companies = useMemo(() => {
    const comps = new Set<string>();
    PROJECTS.forEach(p => comps.add(p.company));
    return Array.from(comps).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const categoryMatch = selectedCategories.length === 0 || 
        project.categories.some(cat => selectedCategories.includes(cat));
      const companyMatch = selectedCompanies.length === 0 || 
        selectedCompanies.includes(project.company);
      return categoryMatch && companyMatch;
    });
  }, [selectedCategories, selectedCompanies]);

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
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of work showcasing my technical expertise and problem-solving abilities
          </p>
        </section>

        {/* Filters Accordion */}
        <section className="projects-filters-accordion">
          <button 
            className="accordion-header"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span className="accordion-title">🔍 Filter Projects</span>
            <span className={`accordion-icon ${filterOpen ? 'open' : ''}`}>▼</span>
          </button>

          {filterOpen && (
            <div className="accordion-content">
              <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
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
                <h3 className="filter-title">Company</h3>
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
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </section>

        {/* Projects Count */}
        <div className="projects-count">
          Showing {filteredProjects.length} of {PROJECTS.length} projects
        </div>

        {/* Projects Grid */}
        <section className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="no-projects">
              <p>No projects match your filter criteria</p>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
