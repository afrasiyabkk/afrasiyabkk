'use client';

import { Experience } from '@/data/experiences';
import '@/styles/experience-card.css';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <div className="experience-timeline-item">
      {/* Timeline Dot */}
      <div className={`timeline-dot ${experience.isCurrent ? 'current' : ''}`}></div>

      {/* Experience Card */}
      <div className="experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
        {/* Header with Title and Company */}
        <div className="experience-header">
          <div className="experience-title-section">
            <h3 className="experience-title">{experience.title}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-location">{experience.location}</p>
          </div>
          <div className="experience-dates">
            <span className={`date-badge ${experience.isCurrent ? 'current' : ''}`}>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="experience-description">{experience.description}</p>

        {/* Responsibilities */}
        <div className="responsibilities-section">
          <h4 className="responsibilities-heading">Responsibilities</h4>
          <ul className="responsibilities-list">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="experience-tech">
          <h4 className="tech-heading">Technologies</h4>
          <div className="tech-tags">
            {experience.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
