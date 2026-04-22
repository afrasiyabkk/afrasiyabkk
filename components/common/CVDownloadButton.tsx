'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { generateCVPDF } from '@/lib/cv-generator';
import '@/styles/cv-button.css';

export const CVDownloadButton = () => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadCV = async () => {
    setIsLoading(true);
    try {
      generateCVPDF(language);
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Error generating CV. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadCV}
      disabled={isLoading}
      className="cv-download-btn"
      title="Download CV as PDF"
    >
      {isLoading ? (
        <>
          <span className="cv-icon">⏳</span>
          <span>Generating PDF...</span>
        </>
      ) : (
        <>
          <span className="cv-icon">📄</span>
          <span>Download CV</span>
        </>
      )}
    </button>
  );
};
