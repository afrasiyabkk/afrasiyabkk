import { EXPERIENCES } from './experiences';

// Project Categories
export const PROJECT_CATEGORIES = {
  WEB_APP: 'Web App',
  ANDROID: 'Android',
  IOS: 'iOS',
  DESKTOP_APP: 'Desktop App',
  CLI_TOOL: 'CLI Tool',
  BOT: 'Bot',
} as const;

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  categories: string[];
  company: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'jbo',
    title: 'Jstore Back Office - Financial Module',
    shortDescription: 'Accounting and Cash Management Module with Dynamic Document Generation',
    description: 'A sophisticated accounting module developed entirely from scratch within the Jstore back office management system. This specialized financial system manages cashbook and cash ledger operations with intelligent document generation. The module features a flexible AccountingReasons template system that allows configuration of different accounting heads based on business requirements. Users create configurations specifying debit and credit accounting reasons, which the system uses to automatically generate financial documents by integrating real-time sales data from external supermarket services. The system maintains separate database integrity with full support for multi-cashier and multi-register environments, shows total debits and total credits value and the reconciliation (difference between debit and credit). Other then the financial module, I contributed along with a team of other developers in developing other modules of the JBO Managerment system such as Warehouse module, Inventory module, Article module. The financial module seamlessly integrates with the larger ecosystem.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'RESTful API', 'Vue.js', 'Html', 'CSS', 'Syncfusion'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[0].company,
    images: [
      '/media/finanziario1.png',
      '/media/finanziario2.png',
      '/media/finanziario3.png',
      '/media/finanziario4.png',
      '/media/finanziario5.png',
      '/media/finanziario6.png',
    ],
    features: [
      'External API integration to recover the supermarket sales information from external services',
      'Complex Calculation to calculate the values of the financial documents based on the sales data and the configured accounting reasons',
      'Complex queries (using JPA and Criteria Builder) to filter documents based on various criteria',
      'Cron job to automatically recover the information like (store, company, salesChannel, shopSign, vat etc.) from the external services after a defined interval',
      'Cron job to automatically create documents for the day after the defined interval',
      'Separate database architecture for module isolation and scalability',
      'Full backend and frontend development from scratch',
    ],
  },
  {
    id: 'spedizione-web',
    title: 'Spedizione Web',
    shortDescription: 'Integrated shipping management with SOAP API integration and marketplace order synchronization',
    description: 'Spedizione Web is a comprehensive shipping management platform developed that enables users to calculate shipping costs, select from multiple courier services (BRT, SDA, Poste Italiane, etc.), and manage shipments. I developed two critical microservices for this platform: (1) A microservice that integrates with Poste Italiane\'s SOAP API to enable users to directly send registered mail (raccomandata) online with streamlined document generation and tracking. (2) An Orders Management microservice using REST API that synchronizes orders from e-commerce marketplaces (Woocommerce, with expandable support for Amazon, eBay, and others) directly into the shipping system, automating shipping those orders.',
    technologies: ['Java', 'Springboot', 'Postgres', 'SOAP API', 'REST API', 'Microservices'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[0].company,
    images: [
      '/media/spedizioniweb1.png',
      '/media/spedizioniweb2.png',
    ],
    features: [
      'Poste Italiane SOAP API integration for registered mail (raccomandata) operations',
      'Microservice architecture for service isolation and independent deployment',
      'Orders Management microservice with REST API design patterns',
      'Woocommerce marketplace REST API integration with order synchronization',
      'Extensible marketplace connector architecture for multi-platform support, managed in such a way that any marketplaces orders responses are converted into the same response so that when we add more marketplaces here in the microservice, spedizioniweb needs no change to accept those orders.',
      'Real-time shipment cost calculation from multiple carriers',
    ],
  },
  {
    id: 'social-media-app',
    title: 'Social Media Application',
    shortDescription: 'Full-featured social media platform with real-time chat',
    description: 'Worked on multiple modules of a comprehensive social media application including real-time chat functionality, Google authentication, and integrated Google Maps for location-based features.',
    technologies: ['Python', 'Django', 'Websockets', 'Channels'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1611095461304-831a04ab2d5c?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1597589254529-fc99f6a8a181?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    ],
    features: [
      'Real-time chat messaging',
      'Google login integration',
      'Location-based features with Google Maps',
      'User profiles and discovery',
      'Social interaction features',
    ],
  },
  {
    id: 'crypto-trading-bot',
    title: 'Web Crypto Trading Bot',
    shortDescription: 'Automated trading bot with configurable strategies',
    description: 'An automated cryptocurrency trading bot for Bybit exchange with configurable trading strategies, real-time market analysis, and risk management features.',
    technologies: ['Python', 'JavaScript', 'Bybit API', 'WebSockets'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1642104704394-967ef8f0bf63?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1639762681033-6461efb0efa1?w=500&h=300&fit=crop',
    ],
    features: [
      'Configurable trading strategies',
      'Real-time market monitoring',
      'Automated trade execution',
      'Risk management controls',
      'Performance analytics',
    ],
  },
  {
    id: 'gfin-web-ecosystem',
    title: 'GFIN Web Ecosystem',
    shortDescription: 'Integrated network of web applications with control panel',
    description: 'A sophisticated ecosystem of connected web applications with a centralized control panel for management and monitoring. Provides seamless integration across multiple financial services.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1460925895917-aae19038bd3c?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    ],
    features: [
      'Centralized control panel',
      'Multi-application integration',
      'Real-time monitoring and alerting',
      'Scalable architecture',
    ],
  },
  {
    id: 'gfin-android-app',
    title: 'GFIN Android App',
    shortDescription: 'Android app for real-time monitoring and control',
    description: 'A native Android application for monitoring and controlling the GFIN ecosystem in real-time. Provides comprehensive features for financial operations on mobile devices.',
    technologies: ['Android (Java/Kotlin)', 'Firebase', 'REST API'],
    categories: [PROJECT_CATEGORIES.ANDROID],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1512941691920-25bda29afb18?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1526543627102-908f5427f94a?w=500&h=300&fit=crop',
    ],
    features: [
      'Real-time monitoring dashboards',
      'Mobile control interface',
      'Push notifications',
      'Offline functionality',
    ],
  },
  {
    id: 'air-freight-service',
    title: 'Online Air Freight Service',
    shortDescription: 'Web service for air freight between USA/Canada and Egypt',
    description: 'A web platform providing air freight services between USA/Canada and Egypt with automated cost calculation and secure payment processing via Tap.',
    technologies: ['React', 'Node.js', 'Tap Payment API', 'Express.js'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1492217261426-89e8f18ceffe?w=500&h=300&fit=crop',
    ],
    features: [
      'Route optimization',
      'Automated cost calculation',
      'Tap payment integration',
      'Real-time tracking',
      'Multi-currency support',
    ],
  },
  {
    id: 'price-estimate-app',
    title: 'Price Estimate App',
    shortDescription: 'Automatic app development cost calculator',
    description: 'An intelligent tool that automatically calculates the cost estimate for developing web, Android, and iOS applications based on project specifications and complexity.',
    technologies: ['React', 'JavaScript', 'Node.js'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1607799632418-017d87b92431?w=500&h=300&fit=crop',
    ],
    features: [
      'Multi-platform cost calculation',
      'Complexity assessment',
      'Real-time price estimation',
      'Detailed cost breakdown',
      'Export estimates',
    ],
  },
  {
    id: 'management-systems',
    title: 'Custom Management Systems',
    shortDescription: 'Tailored enterprise management solutions',
    description: 'Custom-developed management systems designed to meet specific business requirements. Includes inventory, operations, and resource management functionalities.',
    technologies: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'MySQL', 'React'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1551594693-46a2bb4b6f67?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555689360-7d1f6871b0ee?w=500&h=300&fit=crop',
    ],
    features: [
      'Customizable workflows',
      'User management and roles',
      'Reporting and analytics',
      'Data export capabilities',
      'API integrations',
    ],
  },
  {
    id: 'scraping-desktop-tools',
    title: 'Scraping Desktop Tools',
    shortDescription: 'Web automation and data collection with Google Sheets integration',
    description: 'Comprehensive desktop tools for web scraping and data automation. Automatically collects data from websites and integrates with Google Sheets for centralized data management.',
    technologies: ['Python', 'Selenium', 'Google Sheets API', 'Electron'],
    categories: [PROJECT_CATEGORIES.DESKTOP_APP],
    company: EXPERIENCES[1].company,
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516321365853-50f8ab294c79?w=500&h=300&fit=crop',
    ],
    features: [
      'Automated web scraping',
      'Google Sheets integration',
      'Data validation and cleaning',
      'Scheduled tasks',
      'Multi-source data collection',
    ],
  },
];
