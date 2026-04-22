'use client';

import { useState, useEffect } from 'react';
import { Language, getLanguageCookie, setLanguageCookie, getPreferredLanguage } from '@/lib/language';
import { useLanguage } from '@/context/LanguageContext';
import '@/styles/language-selector.css';

export const LanguageSelector = () => {
  const { language: contextLanguage, setLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize language from cookie or browser preference
  useEffect(() => {
    const preferredLanguage = getPreferredLanguage();
    setCurrentLanguage(preferredLanguage);
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setLanguageCookie(language);
    setLanguage(language);
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={`language-selector ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
      {!isMobile && (
        <button
          className="language-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select language"
          aria-expanded={isOpen}
          title="Select Language"
        >
          🌐
        </button>
      )}

      {(isOpen || isMobile) && (
        <div className="language-dropdown">
          <button
            className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <span className="language-flag">🇺🇸</span>
            English
          </button>
          <button
            className={`language-option ${currentLanguage === 'it' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('it')}
          >
            <span className="language-flag">🇮🇹</span>
            Italiano
          </button>
        </div>
      )}
    </div>
  );
};
