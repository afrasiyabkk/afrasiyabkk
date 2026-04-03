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
      'Microservices architecture for service isolation and independent deployment',
      'Deploy the Microservices to client\'s servers',
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
      'Deploy the Microservices to client\'s servers',
    ],
  },
  {
    id: 'eclipse-ai-plugin',
    title: 'Eclipse AI Plugin - Gemini Integration',
    shortDescription: 'AI-powered Eclipse IDE plugin with Google Gemini API for intelligent code generation',
    description: 'An intelligent Eclipse IDE plugin that seamlessly integrates Google Gemini API to provide AI-powered code generation and assistance. The plugin reads the complete project context, analyzes all currently opened files in the editor, and uses this context along with user prompts to generate intelligent code suggestions. It automatically updates existing code or creates new files based on the AI-generated output. The plugin supports multiple file formats including images and PDFs, allowing developers to include visual references and documentation in their prompts for more accurate code generation. This enables a workflow where developers can reference designs, specifications, and existing code patterns while receiving contextually-aware AI assistance directly within their IDE.',
    technologies: ['Java', 'Eclipse IDE API', 'Google Gemini API', 'REST API', 'Eclipse Plugin Development'],
    categories: [PROJECT_CATEGORIES.DESKTOP_APP],
    company: EXPERIENCES[0].company,
    images: [
      '/media/eclipseaiplugin1.png',
      '/media/eclipseaiplugin2.png',
    ],
    features: [
      'Google Gemini API integration for advanced code generation',
      'Project context analysis and intelligent file reading from editor workspace',
      'Multi-file context aggregation to provide comprehensive code understanding for Gemini',
      'Support for multiple file types including images (PNG, JPG, GIF) and PDFs for reference-based code generation',
      'Automated code update and new file creation based on AI-generated output',
      'Eclipse IDE plugin architecture for seamless IDE integration and UI/UX consistency',
      'Context-aware prompt processing that attaches relevant file contents and project structure to user prompts',
      'Real-time code generation with automatic synchronization to project files',
      'Extensible design for supporting additional AI models and APIs beyond Gemini',
    ],
  },
  {
    id: 'vscode-ai-plugin',
    title: 'VS Code AI Plugin - Gemini Integration',
    shortDescription: 'Intelligent VS Code extension with Google Gemini API and multi-model support for AI-powered development',
    description: 'A powerful VS Code extension that integrates Google Gemini API to provide intelligent code generation and AI assistance directly within the editor. The plugin allows developers to select from available Gemini models, enabling flexibility in choosing between different model capabilities and performance characteristics. It analyzes the complete project context, reads all currently opened files in the editor, and incorporates this comprehensive information into user prompts sent to Gemini. The extension supports multiple file types including code files, images, and PDFs, allowing developers to include visual designs, specifications, and documentation references when requesting code generation. Based on Gemini\'s AI-generated responses, the plugin automatically updates existing code files or creates new files as needed, seamlessly integrating AI assistance into the development workflow.',
    technologies: ['TypeScript', 'VS Code Extension API', 'Google Gemini API', 'REST API', 'Node.js'],
    categories: [PROJECT_CATEGORIES.DESKTOP_APP],
    company: EXPERIENCES[0].company,
    images: [
      '/media/vscodeaiplugin1.png',
    ],
    features: [
      'Google Gemini API integration with multi-model selection capability',
      'Dynamic model selector to choose from available Gemini models based on use case',
      'Complete project context analysis and intelligent file reading from editor workspace',
      'Multi-file context aggregation with opened files automatically included in prompts',
      'Support for multiple file types including code files, images (PNG, JPG, GIF), and PDFs',
      'Intelligent prompt enhancement that automatically attaches relevant file contents and project structure',
      'Automated code update and new file creation based on AI-generated output',
      'Real-time code synchronization with automatic file updates reflecting AI suggestions',
      'VS Code extension architecture with native IDE integration and UI consistency',
      'Extensible design for supporting additional AI models and APIs beyond Gemini',
      'Syntax-aware code generation with language detection and formatting preservation',
    ],
  },
  {
    id: 'social-media-app',
    title: 'Social Media Application - Backend Development',
    shortDescription: 'Comprehensive backend system for social media platform with real-time messaging',
    description: 'Contributed to the backend development of a comprehensive social media application for a client. While the complete application contains numerous modules, this work focuses on specific modules shown in the images: user profiles, posts (with stories, reels, and posts), real-time chat messaging, notifications, and search functionality. For each of these modules, architected and implemented complete RESTful API endpoints with full CRUD operations. The chat module utilizes Django Channels and WebSockets to provide real-time messaging capabilities between users with seamless connection management and event handling. These modules integrate with the larger platform ecosystem which contains additional backend services developed by other team members.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'WebSockets', 'Channels', 'PostgreSQL'],
    categories: [PROJECT_CATEGORIES.WEB_APP],
    company: EXPERIENCES[1].company,
    images: [
      '/media/socialmediabe1.png',
      '/media/socialmediabe2.png',
      '/media/socialmediabe3.png',
      '/media/socialmediabe4.png',
      '/media/socialmediabe5.png',
      '/media/socialmediabe6.png',
      '/media/socialmediabe7.png',
    ],
    features: [
      'Real-time chat messaging system using Django Channels and WebSockets for instant message delivery',
      'Real-time notification alerts using firebase integration for push notifications to users',
      'Search algorithms to search users, posts, stories, and content across the platform',
      'User authentication and authorization with role-based access control',
      'Complex database queries optimized for performance and scalability',
      'RESTful API design patterns with proper HTTP methods and status codes',
      'Deployment of backend services to client\'s server',
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
