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
}

export const PROJECTS: Project[] = [
  {
    id: 'jstore-financial',
    title: 'Jstore Financial Module',
    shortDescription: 'Supermarket management and financial document system',
    description: 'A comprehensive financial module that allows users to create journal entries and statements for supermarket sales. The system provides complete management for supermarket operations with advanced financial tracking and reporting capabilities.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    ],
    features: [
      'Journal entry creation and management',
      'Sales statement generation',
      'Financial reporting',
      'Real-time data synchronization',
    ],
  },
  {
    id: 'registered-mail-online',
    title: 'Registered Mail Online System',
    shortDescription: 'Italian Post mail management platform',
    description: 'A web-based system for managing registered mail services through Italian Post. The platform streamlines mail tracking and management operations with real-time updates and comprehensive reporting.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=300&fit=crop',
    ],
    features: [
      'Mail tracking and tracing',
      'Service management',
      'Real-time notifications',
      'Admin dashboard',
    ],
  },
  {
    id: 'social-media-app',
    title: 'Social Media Application',
    shortDescription: 'Full-featured social media platform with real-time chat',
    description: 'Worked on multiple modules of a comprehensive social media application including real-time chat functionality, Google authentication, and integrated Google Maps for location-based features.',
    technologies: ['Python', 'Django', 'Websockets', 'Channels'],
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
