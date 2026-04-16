export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Game Development' | 'Mobile Development' | 'Desktop' | 'Database' | 'Tools' | 'Other' | 'DevOps';
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
  
  return Math.max(years, 1);
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
  
  // Frontend - HTML/CSS
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    level: 'Expert',
    startYear: 2020,
    endYear: 'now',
    description: 'Semantic markup, accessibility, forms',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    level: 'Expert',
    startYear: 2020,
    endYear: 'now',
    description: 'Styling, flexbox, grid, animations, responsive design',
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
  {
    id: 'soap-api',
    name: 'SOAP API',
    category: 'Other',
    level: 'Advanced',
    startYear: 2023,
    endYear: 2024,
    description: 'XML-based web services, API integration',
  },
  {
    id: 'excel',
    name: 'Excel',
    category: 'Tools',
    level: 'Advanced',
    startYear: 2017,
    endYear: 'now',
    description: 'Spreadsheets, data analysis, formulas',
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'Tools',
    level: 'Intermediate',
    startYear: 2019,
    endYear: 2020,
    description: 'Accounting software, financial management',
  },
  {
    id: 'accounting',
    name: 'Accounting',
    category: 'Other',
    level: 'Intermediate',
    startYear: 2017,
    endYear: 2019,
    description: 'Financial management, compliance, reporting',
  },
  {
    id: 'audit',
    name: 'Audit',
    category: 'Other',
    level: 'Intermediate',
    startYear: 2017,
    endYear: 2018,
    description: 'Audit procedures, compliance verification',
  },
  {
    id: 'compliance',
    name: 'Compliance',
    category: 'Other',
    level: 'Intermediate',
    startYear: 2017,
    endYear: 2018,
    description: 'Regulatory compliance, documentation standards',
  },
  {
    id: 'documentation',
    name: 'Documentation',
    category: 'Tools',
    level: 'Intermediate',
    startYear: 2017,
    endYear: 'now',
    description: 'Technical documentation, record keeping',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2021,
    endYear: 2022,
    description: 'Server-side JavaScript, npm, async programming',
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Backend',
    level: 'Intermediate',
    startYear: 2025,
    endYear: 'now',
    description: '.NET framework, object-oriented programming',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    level: 'Intermediate',
    startYear: 2025,
    endYear: 2026,
    description: 'Modern Python web framework, async support',
  },
  {
    id: 'unity',
    name: 'Unity',
    category: 'Game Development',
    level: 'Intermediate',
    startYear: 2025,
    endYear: 'now',
    description: 'Game development engine, 3D graphics',
  },
  {
    id: 'electron',
    name: 'Electron',
    category: 'Desktop',
    level: 'Beginner',
    startYear: 2025,
    endYear: 2026,
    description: 'Desktop application framework, cross-platform development',
  },
  {
    id: 'express',
    name: 'Express',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'Node.js web framework, middleware, routing',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Database',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'In-memory data store, caching, real-time data',
  },
  {
    id: 'channels',
    name: 'Channels',
    category: 'Backend',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'Django WebSockets, real-time communication',
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    category: 'Other',
    level: 'Advanced',
    startYear: 2021,
    endYear: 'now',
    description: 'Real-time bidirectional communication, event-driven architecture',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    level: 'Advanced',
    startYear: 2020,
    endYear: 'now',
    description: 'CSS framework, responsive design, components',
  },
  {
    id: 'syncfusion',
    name: 'Syncfusion',
    category: 'Frontend',
    level: 'Intermediate',
    startYear: 2022,
    endYear: 2023,
    description: 'UI components library, data visualization, charts',
  },
  {
    id: 'google-gemini-api',
    name: 'Google Gemini API',
    category: 'Other',
    level: 'Advanced',
    startYear: 2024,
    endYear: 'now',
    description: 'AI language model, code generation, multimodal input',
  },
  {
    id: 'eclipse-ide-api',
    name: 'Eclipse IDE API',
    category: 'Tools',
    level: 'Intermediate',
    startYear: 2023,
    endYear: 2024,
    description: 'Eclipse plugin development, IDE integration',
  },
  {
    id: 'eclipse-plugin-development',
    name: 'Eclipse Plugin Development',
    category: 'Tools',
    level: 'Intermediate',
    startYear: 2023,
    endYear: 2024,
    description: 'Eclipse IDE plugin architecture, extension points',
  },
  {
    id: 'vscode-extension-api',
    name: 'VS Code Extension API',
    category: 'Tools',
    level: 'Advanced',
    startYear: 2024,
    endYear: 'now',
    description: 'VS Code extension development, API integration',
  },
  {
    id: 'django-rest-framework',
    name: 'Django REST Framework',
    category: 'Backend',
    level: 'Expert',
    startYear: 2021,
    endYear: 'now',
    description: 'REST API development with Django, serialization, authentication',
  },
  {
    id: 'pybit',
    name: 'PyBit',
    category: 'Other',
    level: 'Intermediate',
    startYear: 2022,
    endYear: 2023,
    description: 'Bybit API client, cryptocurrency trading integration',
  },
  {
    id: 'email-service',
    name: 'Email Service',
    category: 'Other',
    level: 'Intermediate',
    startYear: 2021,
    endYear: 'now',
    description: 'Email integration, SMTP, sending notifications',
  },
  {
    id: 'microservices',
    name: 'Microservices',
    category: 'Other',
    level: 'Advanced',
    startYear: 2022,
    endYear: 'now',
    description: 'Microservices architecture, service isolation, independent deployment',
  },
];
