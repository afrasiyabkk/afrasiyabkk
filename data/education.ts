import { Language } from '@/lib/language';

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  field?: string;
  description?: string;
  details?: string[];
}

export interface EducationPageData {
  title: string;
  subtitle: string;
}

// English Version
export const EDUCATIONS_EN: Education[] = [
  {
    id: 'master-finance',
    degree: 'Master in International Finance and Economics',
    institution: 'University of Macerata',
    location: 'Italy',
    startDate: '2020',
    endDate: '2023',
    field: 'Finance & International Economics',
    description: 'Advanced studies in international finance and economics',
    details: [
      'Specialized in international financial markets',
      'Advanced economic theory and analysis',
      'European financial regulations and compliance',
    ],
  },
  {
    id: 'bs-accounting',
    degree: 'BS Accounting & Finance',
    institution: 'University of Engineering & Technology',
    location: 'Pakistan',
    startDate: '2013',
    endDate: '2017',
    field: 'Accounting & Finance',
    description: 'Bachelor degree in Accounting and Finance',
    details: [
      'Financial accounting and reporting',
      'Management accounting and cost analysis',
      'Auditing and compliance frameworks',
      'Business finance and investment analysis',
    ],
  },
];

// Italian Version
export const EDUCATIONS_IT: Education[] = [
  {
    id: 'master-finance',
    degree: 'Master in Finanza e Economia Internazionale',
    institution: 'Università degli Studi di Macerata',
    location: 'Italia',
    startDate: '2020',
    endDate: '2023',
    field: 'Finanza ed Economia Internazionale',
    description: 'Studi avanzati in finanza ed economia internazionale',
    details: [
      'Specializzazione nei mercati finanziari internazionali',
      'Teoria economica avanzata e analisi',
      'Normative finanziarie europee e conformità',
    ],
  },
  {
    id: 'bs-accounting',
    degree: 'BS Contabilità e Finanza',
    institution: 'Università di Ingegneria e Tecnologia',
    location: 'Pakistan',
    startDate: '2013',
    endDate: '2017',
    field: 'Contabilità e Finanza',
    description: 'Laurea in Contabilità e Finanza',
    details: [
      'Contabilità finanziaria e reportistica',
      'Contabilità gestionale e analisi dei costi',
      'Framework di audit e conformità',
      'Finanza aziendale e analisi degli investimenti',
    ],
  },
];

// Get educations based on language
export const getEducations = (language: Language): Education[] => {
  return language === 'it' ? EDUCATIONS_IT : EDUCATIONS_EN;
};

// Education Page Data
export const EDUCATION_PAGE_EN: EducationPageData = {
  title: 'My Education',
  subtitle: 'Academic background and professional development',
};

export const EDUCATION_PAGE_IT: EducationPageData = {
  title: 'La Mia Formazione',
  subtitle: 'Background accademico e sviluppo professionale',
};

export const getEducationPageData = (language: Language): EducationPageData => {
  return language === 'it' ? EDUCATION_PAGE_IT : EDUCATION_PAGE_EN;
};

// Legacy export for backward compatibility
export const EDUCATIONS = EDUCATIONS_EN;
