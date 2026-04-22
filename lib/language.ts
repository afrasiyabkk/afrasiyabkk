/**
 * Language utility functions for handling language preferences
 */

export type Language = 'en' | 'it';

const LANGUAGE_COOKIE_NAME = 'afrasiyab_language';
const LANGUAGE_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Save language preference to cookie
 */
export const setLanguageCookie = (language: Language): void => {
  if (typeof document === 'undefined') return;
  
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + LANGUAGE_COOKIE_MAX_AGE * 1000);
  
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; expires=${expirationDate.toUTCString()}; path=/`;
};

/**
 * Get language preference from cookie
 */
export const getLanguageCookie = (): Language | null => {
  if (typeof document === 'undefined') return null;
  
  const name = `${LANGUAGE_COOKIE_NAME}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  
  for (let cookie of cookieArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      const value = cookie.substring(name.length, cookie.length);
      return value as Language;
    }
  }
  
  return null;
};

/**
 * Get language preference from cookie or browser default
 */
export const getPreferredLanguage = (): Language => {
  // First check if language is stored in cookie
  const cookieLanguage = getLanguageCookie();
  if (cookieLanguage) {
    return cookieLanguage;
  }
  
  // If no cookie, try to detect browser language
  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('it')) {
      return 'it';
    }
  }
  
  // Default to English
  return 'en';
};
