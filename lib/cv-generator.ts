import jsPDF from 'jspdf';
import { getPersonalInfo, getBioWithYears } from '@/data/personal-info';
import { getExperiences } from '@/data/experiences';
import { getEducations } from '@/data/education';
import { getSkills } from '@/data/skills';
import { getProjects } from '@/data/projects';
import { Language } from '@/lib/language';

export const generateCVPDF = (language: Language = 'en') => {
  const personalInfo = getPersonalInfo(language);
  const experiences = getExperiences(language);
  const educations = getEducations(language);
  const skills = getSkills(language);
  const projects = getProjects(language);
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const primaryColor = [41, 98, 255];
  const secondaryColor = [80, 80, 80];
  const textColor = [50, 50, 50];
  const lightGray = [200, 200, 200];

  // Helper function to add section title
  const addSectionTitle = (title: string) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title, margin, yPosition);

    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2);
    yPosition += 8;
  };

  // Helper function to check page break
  const checkPageBreak = (neededSpace: number) => {
    if (yPosition + neededSpace > pageHeight - 10) {
      doc.addPage();
      yPosition = 15;
    }
  };

  // HEADER
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(personalInfo.fullName, margin, yPosition);
  yPosition += 10;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(personalInfo.designation, margin, yPosition);
  yPosition += 6;

  doc.setFontSize(10);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const contactInfo = `${personalInfo.email} | ${personalInfo.phone}`;
  doc.text(contactInfo, margin, yPosition);
  yPosition += 4;

  // Portfolio link
  doc.setFontSize(9);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont('Helvetica', 'normal');
  doc.text('Portfolio: ', margin, yPosition);
  
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  let portfolioUrl = typeof window !== 'undefined' ? window.location.origin : (process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyabkk.github.io');
  if (typeof window !== 'undefined' && window.location.origin.includes('github.io')) {
    portfolioUrl += '/afrasiyabkk';
  }
  doc.text(portfolioUrl, margin + 18, yPosition);
  yPosition += 7;

  // PROFESSIONAL SUMMARY
  checkPageBreak(30);
  yPosition += 3;
  addSectionTitle('PROFESSIONAL SUMMARY');
  
  doc.setFontSize(10);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont('Helvetica', 'normal');
  
  const bioText = getBioWithYears(language);
  const bioLines = doc.splitTextToSize(bioText, contentWidth);
  doc.text(bioLines, margin, yPosition);
  yPosition += bioLines.length * 3.5 + 6;

  // EXPERIENCE
  checkPageBreak(40);
  yPosition += 3;
  addSectionTitle('PROFESSIONAL EXPERIENCE');

  experiences.forEach((exp) => {
    checkPageBreak(18);
    yPosition += 2;

    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(exp.title, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(10);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(exp.location, margin, yPosition);
    yPosition += 3;

    doc.setFontSize(10);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    const expDescLines = doc.splitTextToSize(exp.description, contentWidth);
    doc.text(expDescLines, margin, yPosition);
    yPosition += expDescLines.length * 3.5 + 3;

    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text('Key Responsibilities:', margin, yPosition);
    yPosition += 4;

    exp.responsibilities.forEach((resp) => {
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      doc.setFont('Helvetica', 'normal');
      const respLines = doc.splitTextToSize(`• ${resp}`, contentWidth - 2);
      doc.text(respLines, margin + 2, yPosition);
      yPosition += respLines.length * 3 + 2;
    });

    yPosition += 2;

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Technologies:', margin, yPosition);
    yPosition += 4;

    const expTechText = exp.technologies.join(', ');
    const expTechLines = doc.splitTextToSize(expTechText, contentWidth - 2);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(expTechLines, margin + 2, yPosition);
    yPosition += expTechLines.length * 3 + 6;
  });

  // EDUCATION
  checkPageBreak(30);
  yPosition += 3;
  addSectionTitle('EDUCATION');

  educations.forEach((edu) => {
    checkPageBreak(15);
    yPosition += 2;

    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(edu.degree, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(10);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(`${edu.institution} | ${edu.startDate} - ${edu.endDate}`, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(edu.location, margin, yPosition);
    yPosition += 7;
  });

  // SKILLS
  checkPageBreak(40);
  yPosition += 3;
  addSectionTitle('TECHNICAL SKILLS');

  const skillCategories = Array.from(new Set(skills.map(s => s.category)));
  
  skillCategories.forEach((category) => {
    checkPageBreak(8);
    
    const categorySkills = skills.filter(s => s.category === category);
    const skillNames = categorySkills.map(s => s.name).join(', ');

    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(`${category}:`, margin, yPosition);
    yPosition += 3;

    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    const skillLines = doc.splitTextToSize(skillNames, contentWidth - 4);
    doc.text(skillLines, margin + 2, yPosition);
    yPosition += skillLines.length * 3 + 4;
  });

  // PROJECTS
  checkPageBreak(40);
  yPosition += 3;
  addSectionTitle('PROJECTS');

  yPosition += 2;
  doc.setFontSize(8);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont('Helvetica', 'normal');
  doc.text('View all projects on portfolio: ', margin, yPosition);
  
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  let portfolioProjectsUrl = typeof window !== 'undefined' ? `${window.location.origin}/projects` : `${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyabkk.github.io'}/projects`;
  if (typeof window !== 'undefined' && window.location.origin.includes('github.io')) {
    portfolioProjectsUrl = typeof window !== 'undefined' ? `${window.location.origin}/afrasiyabkk/projects` : `${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyabkk.github.io'}/afrasiyabkk/projects`;
  }
  doc.text(portfolioProjectsUrl, margin + 40, yPosition);
  yPosition += 5;

  projects.forEach((project) => {
    checkPageBreak(12);
    yPosition += 2;

    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(project.title, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(10);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    const projDescLines = doc.splitTextToSize(project.shortDescription, contentWidth);
    doc.text(projDescLines, margin, yPosition);
    yPosition += projDescLines.length * 3.5 + 3;

    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text('Technologies:', margin, yPosition);
    yPosition += 4;

    const projTechText = project.technologies.join(', ');
    const projTechLines = doc.splitTextToSize(projTechText, contentWidth - 2);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('Helvetica', 'normal');
    doc.text(projTechLines, margin + 2, yPosition);
    yPosition += projTechLines.length * 3 + 5;
  });

  // PAGE NUMBERS
  doc.setFontSize(8);
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  const totalPages = (doc as any).internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    (doc as any).setPage(i);
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin - 15,
      pageHeight - 8
    );
  }

  doc.save(`${personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
};
