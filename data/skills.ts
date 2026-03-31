export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
  level: SkillLevel;
  startYear: number;
  endYear: number | 'now';
  description?: string;
}

// Helper function to calculate years of experience
export const calculateYearsOfExperience = (
  startYear: number,
  endYear: number | 'now'
): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11, November is 10

  const end = endYear === 'now' ? currentYear : endYear;
  
  // November is month 10 (0-indexed)
  // If current month is before November (0-9), we haven't reached the starting month yet this year
  let years = end - startYear;
  
  if (endYear === 'now' && currentMonth < 10) {
    // If it's before November in the current year, subtract 1
    years--;
  }
  
  return Math.max(0, years);
};

export const SKILLS: Skill[] = [
  // Backend - Java
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    level: 'Expert',
    startYear: 2022,
    endYear: 'now',
    description: 'Object-oriented programming, design patterns, enterprise applications',
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'Backend',
    level: 'Expert',
    startYear: 2022,
    endYear: 'now',
    description: 'REST APIs, microservices, dependency injection, data JPA',
  },
  
  // Backend - Python
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'Django, automation scripts, data processing',
  },
  {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'Web framework, ORM, REST APIs',
  },
  
  // Backend - PHP
  {
    id: 'php',
    name: 'PHP',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2020,
    endYear: 2021,
    description: 'Laravel, custom backends, API development',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2018,
    endYear: 2021,
    description: 'MVC framework, Eloquent ORM, migrations',
  },
  
  // Frontend - React
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'Expert',
    startYear: 2022,
    endYear: 'now',
    description: 'Hooks, state management, component libraries',
  },
  
  // Frontend - Next.js
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 'Expert',
    startYear: 2023,
    endYear: 'now',
    description: 'SSR, SSG, API routes, file-based routing',
  },
  
  // Frontend - Vue.js
  {
    id: 'vuejs',
    name: 'Vue.js',
    category: 'Frontend',
    level: 'Intermediate',
    startYear: 2022,
    endYear: 'now',
    description: 'Composition API, component communication',
  },
  
  // Frontend - JavaScript
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    level: 'Expert',
    startYear: 2020,
    endYear: 'now',
    description: 'ES6+, async/await, DOM manipulation',
  },
  
  // Frontend - TypeScript
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Advanced',
    startYear: 2024,
    endYear: 'now',
    description: 'Type safety, interfaces, generics',
  },
  
  // Frontend - jQuery
  {
    id: 'jquery',
    name: 'jQuery',
    category: 'Frontend',
    level: 'Intermediate',
    startYear: 2020,
    endYear: 2022,
    description: 'DOM manipulation, AJAX, animations',
  },
  
  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Advanced',
    startYear: 2022,
    endYear: 'now',
    description: 'Complex queries, indexing, performance tuning',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    level: 'Advanced',
    startYear: 2020,
    endYear: 'now',
    description: 'Relational databases, normalization',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    level: 'Intermediate',
    startYear: 2022,
    endYear: 2023,
    description: 'Document databases, collections',
  },
  
  // Tools & Other
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    level: 'Expert',
    startYear: 2022,
    endYear: 'now',
    description: 'Version control, collaboration, CI/CD',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    level: 'Expert',
    startYear: 2022,
    endYear: 'now',
    description: 'Branching, merging, rebasing',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tools',
    level: 'Advanced',
    startYear: 2023,
    endYear: 'now',
    description: 'Containerization, images, compose',
  },
  {
    id: 'rest-api',
    name: 'REST API',
    category: 'Other',
    level: 'Expert',
    startYear: 2021,
    endYear: 'now',
    description: 'API design, HTTP methods, status codes',
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    category: 'Tools',
    level: 'Expert',
    startYear: 2024,
    endYear: 'now',
    description: 'Advanced prompt engineering, AI-assisted development',
  },
];
