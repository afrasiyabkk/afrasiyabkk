'use client';

import { Skill, calculateYearsOfExperience, calculateSkillLevel, SkillLevel } from '@/data/skills';
import { getYearsOfExperience } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import '@/styles/skill-card.css';

interface SkillCardProps {
  skill: Skill;
}

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Expert':
      return '#00ff00';
    case 'Advanced':
      return '#00ee00';
    case 'Intermediate':
      return '#00cc00';
    case 'Beginner':
      return '#00aa00';
    default:
      return '#00ff00';
  }
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  const { language } = useLanguage();
  const yearsOfExp = calculateYearsOfExperience(skill.startYear, skill.endYear);
  const endYearDisplay = skill.endYear === 'now' ? 'Present' : skill.endYear;
  const totalYearsExp = getYearsOfExperience();
  const level = calculateSkillLevel(skill.startYear, skill.endYear, totalYearsExp);
  const levelColor = getLevelColor(level);

  // Experience text translations
  const experienceLabels = {
    en: {
      year: 'year',
      years: 'years',
      of: 'of',
      experience: 'experience',
    },
    it: {
      year: 'anno',
      years: 'anni',
      of: 'di',
      experience: 'esperienza',
    },
  };

  const labels = experienceLabels[language as keyof typeof experienceLabels] || experienceLabels.en;
  const yearLabel = Math.max(yearsOfExp, 1) === 1 ? labels.year : labels.years;

  return (
    <div className="skill-card" style={{ '--level-color': levelColor } as any}>
      <div className="skill-card-header">
        <h3 className="skill-name">{skill.name}</h3>
        <span className="skill-level" style={{ borderColor: levelColor, color: levelColor }}>
          {level}
        </span>
      </div>

      <div className="skill-experience">
        <div className="experience-bar">
          <div
            className="experience-fill"
            style={{
              width: `${Math.max(Math.min((yearsOfExp / totalYearsExp) * 100, 100), 1)}%`,
              backgroundColor: levelColor,
            }}
          />
        </div>
        <span className="experience-text">
          {Math.max(yearsOfExp, 1)} {yearLabel} {labels.of} {labels.experience}
        </span>
      </div>

      {skill.description && (
        <p className="skill-description">{skill.description}</p>
      )}
    </div>
  );
};
