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

export const EDUCATIONS: Education[] = [
  {
    id: 'master-finance',
    degree: 'Master in Finanza e Economia Internazionale',
    institution: 'Università degli Studi di Macerata',
    location: 'Italia',
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
