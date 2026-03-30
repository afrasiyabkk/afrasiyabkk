export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  technologies: string[];
  description: string;
  responsibilities: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'current-team-lead',
    title: 'Full Stack Developer → Team Lead',
    company: 'BSS S.r.l.',
    location: 'Ragusa, Italia',
    startDate: 'September 2022',
    endDate: 'Present',
    isCurrent: true,
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'REST APIs'],
    description: 'Leading the development of enterprise-level financial applications while managing junior developers and maintaining direct client relationships.',
    responsibilities: [
      'Complete project management in financial sector, from requirements collection to final delivery',
      'Direct and constant communication with client, including functional analysis, priority definition, and presentation of developments',
      'Coordination and supervision of junior developers, task definitions, and code reviews',
      'Backend and frontend development of enterprise web applications based on modern architecture',
      'Design and implementation of API integrations and REST services focused on performance and scalability',
      'Expert in advanced GitHub Copilot prompt engineering techniques to maximize its potential, significantly improving development speed, code quality and problem-solving efficiency',
      'Contribution to technical specifications and best practices to improve code quality',
    ],
  },
  {
    id: 'freelance-developer',
    title: 'Freelance Full Stack Developer',
    company: 'Fiverr',
    location: 'Remote',
    startDate: 'November 2020',
    endDate: 'December 2022',
    isCurrent: false,
    technologies: ['PHP', 'Laravel', 'MySQL', 'Python', 'Django', 'JavaScript', 'jQuery', 'React.js'],
    description: 'Developed complete web and mobile applications for international clients with focus on customization and integration.',
    responsibilities: [
      'Complete development of Web and Mobile applications with international client base',
      'Implemented various Google services (Google Sheets, Google Maps, Google Login)',
      'Direct client management: requirement analysis, preventive measures, functional definition, testing and delivery',
      'Development of customized APIs, automations and integrations with external services',
      'Advanced debugging, performance optimization and refactoring',
      'Creation of trading bots for cryptocurrency, control panels for multi-site management and web scraping tools',
      'Deployment, continuous maintenance and post-launch support',
    ],
  },
  {
    id: 'accountant',
    title: 'Accountant',
    company: 'Planet Tours & Travels Sharjah',
    location: 'Sharjah, UAE',
    startDate: 'July 2019',
    endDate: 'September 2019',
    isCurrent: false,
    technologies: ['QuickBooks', 'Excel', 'Accounting'],
    description: 'Managed accounting operations and administrative processes for tourism company.',
    responsibilities: [
      'Accounting registration, report management and support to administrative processes',
    ],
  },
  {
    id: 'accounting-intern',
    title: 'Accounting Intern',
    company: 'Zong CMPak',
    location: 'Islamabad, Pakistan',
    startDate: 'October 2017',
    endDate: 'February 2018',
    isCurrent: false,
    technologies: ['Accounting', 'Documentation', 'Excel'],
    description: 'Supported accounting and administrative functions in corporate environment.',
    responsibilities: [
      'Invoice verification, documentation check, and support to administrative processes',
    ],
  },
  {
    id: 'audit-intern',
    title: 'Audit Intern',
    company: 'KPMG Taseer Hadi & Co.',
    location: 'Islamabad, Pakistan',
    startDate: 'March 2017',
    endDate: 'September 2017',
    isCurrent: false,
    technologies: ['Audit', 'Compliance', 'Documentation'],
    description: 'Provided support for audit activities and compliance functions.',
    responsibilities: [
      'Support to audit activities for FWO and Pakistan Tobacco Company',
    ],
  },
];
