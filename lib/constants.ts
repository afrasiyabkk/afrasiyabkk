// Matrix Colors
export const MATRIX_COLORS = {
  green: '#00ff00',
  greenDim: '#00cc00',
  greenBright: '#0fff0f',
  black: '#000000',
  dark: '#0a0e27',
  darker: '#050a16',
  accent: '#ff00ff',
} as const;

// Animation Durations (in ms)
export const ANIMATION_DURATIONS = {
  fast: 300,
  normal: 600,
  slow: 1000,
  verySlow: 1500,
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'HOME', id: 'home' },
  { href: '/projects', label: 'PROJECTS', id: 'projects' },
  { href: '/experience', label: 'EXPERIENCE', id: 'experience' },
  { href: '/education', label: 'EDUCATION', id: 'education' },
  { href: '/skills', label: 'SKILLS', id: 'skills' },
  { href: '/about', label: 'ABOUT', id: 'about' },
  { href: '/contact', label: 'CONTACT', id: 'contact' },
] as const;

// Site Config
export const SITE_CONFIG = {
  title: 'Portfolio | Matrix Style',
  description: 'A matrix-style portfolio site showcasing projects, experience, and skills',
  author: 'Your Name',
  language: 'en',
} as const;
