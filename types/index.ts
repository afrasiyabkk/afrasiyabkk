// Project types
export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
  video?: string;
  category: 'frontend' | 'fullstack' | 'backend' | 'mobile';
};

// Experience types
export type Experience = {
  id: string;
  company: string;
  position: string;
  duration: {
    start: string;
    end: string | null;
  };
  description: string[];
  technologies?: string[];
};

// Education types
export type Education = {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduation: string;
  details?: string[];
};

// Skill types
export type Skill = {
  id: string;
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
};

// Portfolio data
export type PortfolioData = {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone?: string;
    location?: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
};
