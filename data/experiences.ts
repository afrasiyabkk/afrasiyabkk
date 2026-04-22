import { SKILLS } from './skills';
import { Language } from '@/lib/language';

const getSkillName = (skillId: string): string => 
  SKILLS.find(s => s.id === skillId)?.name || skillId;

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

export interface ExperiencePageData {
  title: string;
  subtitle: string;
}

// English Version
export const EXPERIENCES_EN: Experience[] = [
  {
    id: 'current-team-lead',
    title: 'Full Stack Developer → Team Lead',
    company: 'BSS S.r.l.',
    location: 'Ragusa, Italia',
    startDate: 'September 2022',
    endDate: 'Present',
    isCurrent: true,
    technologies: [getSkillName('java'), getSkillName('springboot'), getSkillName('postgresql'), getSkillName('rest-api'), getSkillName('soap-api'), getSkillName('vuejs'), getSkillName('react'), getSkillName('typescript')],
    description: 'Full Stack developer and team lead -> responsible for Development / Maintainance, Management of the projects and clients dealing',
    responsibilities: [
      'Responsible for the development and maintenance of multiple projects, ensuring high-quality code and timely delivery',
      'Direct and constant communication with client, including functional analysis, priority definition, and presentation of developments',
      'Coordination and supervision of junior developers, task definitions, and code reviews',
      'Backend and frontend development of enterprise web applications based on modern architecture',
      'Design and implementation of API integrations and REST/SOAP services focused on performance and scalability',
      'Expert in advanced GitHub Copilot prompt engineering techniques to maximize its potential, significantly improving development speed, code quality and problem-solving efficiency',
      'Contribution to technical specifications and best practices to improve code quality',
      'Advanced debugging, performance optimization and refactoring',
      'Deployment, continuous maintenance and post-launch support',
    ],
  },
  {
    id: 'freelance-developer',
    title: 'Freelance Full Stack Developer',
    company: 'Fiverr',
    location: 'Remote',
    startDate: 'November 2020',
    endDate: 'Present',
    isCurrent: false,
    technologies: [getSkillName('php'), getSkillName('laravel'), getSkillName('mysql'), getSkillName('python'), getSkillName('django'), getSkillName('javascript'), getSkillName('jquery'), getSkillName('react')],
    description: 'Developed complete web and mobile applications for international clients with focus on customization and integration.',
    responsibilities: [
      'Complete development of Web and Mobile applications with international client base',
      'Implemented various Google services (Google Sheets, Google Maps, Google Login)',
      'Direct client dealing: requirement analysis, preventive measures, functional definition, testing and delivery',
      'Development of customized APIs, automations and integrations with external services',
      'Advanced debugging, performance optimization and refactoring',
      'Creation of trading bots for cryptocurrency, control panels for multi-site management and web scraping tools',
      'Deployment, continuous maintenance and post-launch support',
    ],
  },
  {
    id: 'personal-projects',
    title: 'Personal Projects',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: 'November 2020',
    endDate: 'Present',
    isCurrent: false,
    technologies: [getSkillName('react'), getSkillName('nodejs'), getSkillName('javascript'), getSkillName('typescript'), getSkillName('mysql'), getSkillName('unity'), getSkillName('csharp'), getSkillName('electron'), getSkillName('python'), getSkillName('django'), getSkillName('fastapi')],
    description: 'Developed some projects for myself for the purpose of learning and experimentation and trying new ideas. And developed a game (more to come) to persue my passion for gaming and game development.',
    responsibilities: [
      'Full stack development of personal projects',
      'Experimentation with new technologies and frameworks',
      'Portfolio building and skill enhancement',
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
    technologies: [getSkillName('quickbooks'), getSkillName('excel'), getSkillName('accounting')],
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
    technologies: [getSkillName('accounting'), getSkillName('documentation'), getSkillName('excel')],
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
    technologies: [getSkillName('audit'), getSkillName('compliance'), getSkillName('documentation')],
    description: 'Provided support for audit activities and compliance functions.',
    responsibilities: [
      'Support to audit activities for FWO and Pakistan Tobacco Company',
    ],
  },
];

// Italian Version
export const EXPERIENCES_IT: Experience[] = [
  {
    id: 'current-team-lead',
    title: 'Full Stack Developer → Team Lead',
    company: 'BSS S.r.l.',
    location: 'Ragusa, Italia',
    startDate: 'Settembre 2022',
    endDate: 'Presente',
    isCurrent: true,
    technologies: [getSkillName('java'), getSkillName('springboot'), getSkillName('postgresql'), getSkillName('rest-api'), getSkillName('soap-api'), getSkillName('vuejs'), getSkillName('react'), getSkillName('typescript')],
    description: 'Full Stack developer e team lead -> responsabile per sviluppo / manutenzione, gestione dei progetti e rapporti con i clienti',
    responsibilities: [
      'Responsabile dello sviluppo e della manutenzione di molteplici progetti, garantendo codice di alta qualità e consegne puntuali',
      'Comunicazione diretta e costante con il cliente, inclusa analisi funzionale, definizione delle priorità e presentazione degli sviluppi',
      'Coordinamento e supervisione degli sviluppatori junior, definizione dei compiti e revisione del codice',
      'Sviluppo backend e frontend di applicazioni web aziendali basate su architetture moderne',
      'Design e implementazione di integrazioni API e servizi REST/SOAP focalizzati su performance e scalabilità',
      'Esperto in tecniche avanzate di prompt engineering con GitHub Copilot per massimizzare il suo potenziale, migliorando significativamente velocità di sviluppo, qualità del codice ed efficienza nella risoluzione dei problemi',
      'Contributo alle specifiche tecniche e alle best practice per migliorare la qualità del codice',
      'Debugging avanzato, ottimizzazione delle performance e refactoring',
      'Deployment, manutenzione continua e supporto post-lancio',
    ],
  },
  {
    id: 'freelance-developer',
    title: 'Freelance Full Stack Developer',
    company: 'Fiverr',
    location: 'Remoto',
    startDate: 'Novembre 2020',
    endDate: 'Presente',
    isCurrent: false,
    technologies: [getSkillName('php'), getSkillName('laravel'), getSkillName('mysql'), getSkillName('python'), getSkillName('django'), getSkillName('javascript'), getSkillName('jquery'), getSkillName('react')],
    description: 'Ho sviluppato applicazioni web e mobile complete per clienti internazionali con focus su customizzazione e integrazione.',
    responsibilities: [
      'Sviluppo completo di applicazioni Web e Mobile con base di clienti internazionali',
      'Implementazione di vari servizi Google (Google Sheets, Google Maps, Google Login)',
      'Gestione diretta del cliente: analisi dei requisiti, misure preventive, definizione funzionale, test e consegna',
      'Sviluppo di API personalizzate, automazioni e integrazioni con servizi esterni',
      'Debugging avanzato, ottimizzazione delle performance e refactoring',
      'Creazione di trading bot per criptovalute, pannelli di controllo per la gestione multi-sito e strumenti di web scraping',
      'Deployment, manutenzione continua e supporto post-lancio',
    ],
  },
  {
    id: 'personal-projects',
    title: 'Progetti Personali',
    company: 'Lavoro Autonomo',
    location: 'Remoto',
    startDate: 'Novembre 2020',
    endDate: 'Presente',
    isCurrent: false,
    technologies: [getSkillName('react'), getSkillName('nodejs'), getSkillName('javascript'), getSkillName('typescript'), getSkillName('mysql'), getSkillName('unity'), getSkillName('csharp'), getSkillName('electron'), getSkillName('python'), getSkillName('django'), getSkillName('fastapi')],
    description: 'Ho sviluppato alcuni progetti per me stesso al fine di imparare e sperimentare con nuove idee. E ho sviluppato un gioco (altri in arrivo) per perseguire la mia passione per i videogiochi e lo sviluppo di giochi.',
    responsibilities: [
      'Sviluppo full stack di progetti personali',
      'Sperimentazione con nuove tecnologie e framework',
      'Costruzione del portfolio e miglioramento delle competenze',
    ],
  },
  {
    id: 'accountant',
    title: 'Ragioniere',
    company: 'Planet Tours & Travels Sharjah',
    location: 'Sharjah, UAE',
    startDate: 'Luglio 2019',
    endDate: 'Settembre 2019',
    isCurrent: false,
    technologies: [getSkillName('quickbooks'), getSkillName('excel'), getSkillName('accounting')],
    description: 'Ho gestito le operazioni contabili e i processi amministrativi per un\'azienda di turismo.',
    responsibilities: [
      'Registrazione contabile, gestione dei rapporti e supporto ai processi amministrativi',
    ],
  },
  {
    id: 'accounting-intern',
    title: 'Stagista Contabile',
    company: 'Zong CMPak',
    location: 'Islamabad, Pakistan',
    startDate: 'Ottobre 2017',
    endDate: 'Febbraio 2018',
    isCurrent: false,
    technologies: [getSkillName('accounting'), getSkillName('documentation'), getSkillName('excel')],
    description: 'Ho supportato le funzioni contabili e amministrative in un ambiente aziendale.',
    responsibilities: [
      'Verifica delle fatture, controllo della documentazione e supporto ai processi amministrativi',
    ],
  },
  {
    id: 'audit-intern',
    title: 'Stagista Auditor',
    company: 'KPMG Taseer Hadi & Co.',
    location: 'Islamabad, Pakistan',
    startDate: 'Marzo 2017',
    endDate: 'Settembre 2017',
    isCurrent: false,
    technologies: [getSkillName('audit'), getSkillName('compliance'), getSkillName('documentation')],
    description: 'Ho fornito supporto alle attività di audit e alle funzioni di conformità.',
    responsibilities: [
      'Supporto alle attività di audit per FWO e Pakistan Tobacco Company',
    ],
  },
];

// Get experiences based on language
export const getExperiences = (language: Language): Experience[] => {
  return language === 'it' ? EXPERIENCES_IT : EXPERIENCES_EN;
};

// Experience Page Data
export const EXPERIENCE_PAGE_EN: ExperiencePageData = {
  title: 'My Experience',
  subtitle: 'A timeline of my professional journey and career growth',
};

export const EXPERIENCE_PAGE_IT: ExperiencePageData = {
  title: 'La Mia Esperienza',
  subtitle: 'Una cronologia del mio percorso professionale e della mia crescita di carriera',
};

export const getExperiencePageData = (language: Language): ExperiencePageData => {
  return language === 'it' ? EXPERIENCE_PAGE_IT : EXPERIENCE_PAGE_EN;
};

// Legacy export for backward compatibility
export const EXPERIENCES = EXPERIENCES_EN;
