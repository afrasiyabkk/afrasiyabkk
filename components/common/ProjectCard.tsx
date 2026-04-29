'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { getImagePath } from '@/lib/utils';
import '@/styles/project-card.css';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-card" style={{ "--animation-delay": `${index * 0.1}s` } as any}>
      {/* Image Carousel */}
      <div className="project-carousel">
        <img
          src={getImagePath(project.images[currentImageIndex])}
          alt={project.title}
          className="project-image"
        />

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              className="carousel-btn carousel-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Image Indicators */}
            <div className="carousel-indicators">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Info */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        {/* Category and Company Badges */}
        <div className="project-meta-badges">
          <div className="meta-badge company-badge">{project.company}</div>
          {project.categories.map((category) => (
            <div key={category} className="meta-badge category-badge">
              {category}
            </div>
          ))}
        </div>
        
        <p className="project-description">{project.shortDescription}</p>

        {/* Technologies */}
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-btn demo">
              Go to Site
            </a>
          )}
          <Link href={`/projects/${project.id}`} className="project-btn details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
