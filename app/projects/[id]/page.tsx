'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { PROJECTS } from '@/data/projects';
import '@/styles/project-details.css';

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = use(params);
  const [project, setProject] = useState<typeof PROJECTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Find the project from the ID
    const foundProject = PROJECTS.find((p) => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, project]);

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

  if (!project) {
    return (
      <MainLayout>
        <div className="project-details-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="back-btn">
              Back to Projects
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project!.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project!.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <MainLayout>
        <div className="project-details-container">
          <Link href="/projects" className="back-link">
            ← Back to Projects
          </Link>

          <div className="project-details-grid">
            {/* Images Section */}
            <div className="images-section">
              <div className="main-image" onClick={() => setIsModalOpen(true)}>
                <img
                  src={project.images[currentImageIndex]}
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
                <h2 className="section-heading">About</h2>
                <p className="project-full-description">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="tech-section">
                <h2 className="section-heading">Technologies Used</h2>
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
                <h2 className="section-heading">Technical Features</h2>
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
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>

      {/* Full Image Modal - Rendered via Portal */}
      {isModalOpen && typeof window !== 'undefined' &&
        createPortal(
          <div className="image-modal" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={project.images[currentImageIndex]}
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
