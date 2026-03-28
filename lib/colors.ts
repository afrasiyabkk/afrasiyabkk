// Matrix Color Scheme - Centralized Color Constants
export const COLORS = {
  // Primary Colors
  matrixGreen: '#00ff00',
  matrixGreenDim: '#00cc00',
  matrixGreenBright: '#0fff0f',
  matrixBlack: '#000000',
  
  // Secondary Colors
  matrixDark: '#0a0e27',
  matrixDarker: '#050a16',
  matrixAccent: '#ff00ff',
  
  // Backgrounds
  bgPrimary: '#000000',
  bgDark: '#0a0e27',
  
  // Text
  textPrimary: '#00ff00',
  textSecondary: '#00cc00',
  textBright: '#0fff0f',
  
  // Borders
  borderGreen: '#00ff00',
} as const;

// Glow Effects
export const GLOWS = {
  soft: '0 0 10px #00ff00',
  medium: '0 0 10px #00ff00, 0 0 20px #00ff00',
  bright: '0 0 20px #00ff00, 0 0 30px #00ff00',
} as const;
