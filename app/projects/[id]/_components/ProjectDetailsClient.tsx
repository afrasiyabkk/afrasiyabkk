'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';
import { Project, ProjectDetailsPageData } from '@/data/projects';

interface ProjectDetailsClientProps {
  project: Project;
  pageData: ProjectDetailsPageData;
}

export default function ProjectDetailsClient({
  project,
  pageData,
}: ProjectDetailsClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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
    <>
      <div className="project-details-container">
        <Link href="/projects" className="back-link">
          ← {pageData.backToProjects}
        </Link>

        <div className="project-details-grid">
          {/* Images Section */}
          <div className="images-section">
            <div className="main-image" onClick={() => setIsModalOpen(true)}>
              <img
                src={getImagePath(project.images[currentImageIndex])}
                alt={project.title}
                style={{ cursor: 'pointer' }}
              />

              {/* Image Carousel Controls */}
              {project.images.length > 1 && (
                <>
                  <button
                    className="details-carousel-btn prev"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="details-carousel-btn next"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {project.images.length > 1 && (
              <div className="image-thumbnails">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="content-section">
            <h1 className="details-title">{project.title}</h1>

            <div className="description-box">
              <h2 className="section-heading">{pageData.aboutSection}</h2>
              <p className="project-full-description">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="tech-section">
              <h2 className="section-heading">{pageData.technologiesSection}</h2>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="features-section">
              <h2 className="section-heading">{pageData.featuresSection}</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="details-actions">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary"
                >
                  {pageData.goToSiteBtn}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn secondary"
                >
                  {pageData.githubBtn}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Image Modal - Rendered via Portal */}
      {isModalOpen && typeof window !== 'undefined' &&
        createPortal(
          <div className="image-modal" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={getImagePath(project.images[currentImageIndex])}
                alt={project.title}
                className="modal-image"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="modal-carousel-btn prev"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="modal-carousel-btn next"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="modal-counter">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
