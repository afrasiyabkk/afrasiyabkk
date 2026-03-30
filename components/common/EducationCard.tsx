'use client';

import { Education } from '@/data/education';
import { MATRIX_COLORS } from '@/lib/constants';
import '@/styles/education-card.css';

interface EducationCardProps {
  education: Education;
  index?: number;
}

export const EducationCard = ({ education, index = 0 }: EducationCardProps) => {
  return (
    <div className="education-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="education-card-header">
        <div className="education-card-title-section">
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-institution">{education.institution}</p>
          <p className="education-location">{education.location}</p>
        </div>
        <div className="education-date-badge">
          <span className="education-date-start">{education.startDate}</span>
          <span className="education-date-separator">—</span>
          <span className="education-date-end">{education.endDate}</span>
        </div>
      </div>

      {education.field && (
        <p className="education-field">
          <span className="education-field-label">Field:</span> {education.field}
        </p>
      )}

      {education.description && (
        <p className="education-description">{education.description}</p>
      )}

      {education.details && education.details.length > 0 && (
        <ul className="education-details">
          {education.details.map((detail, idx) => (
            <li key={idx} className="education-detail-item">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
