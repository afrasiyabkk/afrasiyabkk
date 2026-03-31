import jsPDF from 'jspdf';
import { PERSONAL_INFO, getBioWithYears } from '@/data/personal-info';
import { EXPERIENCES } from '@/data/experiences';
import { EDUCATIONS } from '@/data/education';
import { SKILLS } from '@/data/skills';
import { PROJECTS } from '@/data/projects';

export const generateCVPDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 15;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const primaryColor = [41, 98, 255]; // Professional blue
  const secondaryColor = [80, 80, 80]; // Dark gray
  const textColor = [50, 50, 50]; // Dark text
  const lightGray = [200, 200, 200]; // Light gray for lines

  // Helper function to add section title
  const addSectionTitle = (title: string) => {
    doc.setFontSize(13);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('', 'bold');
    doc.text(title, margin, yPosition);

    // Underline
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.line(margin, yPosition + 1.5, pageWidth - margin, yPosition + 1.5);
    yPosition += 6;
  };

  // Helper function to check page break
  const checkPageBreak = (neededSpace: number) => {
    if (yPosition + neededSpace > pageHeight - 10) {
      doc.addPage();
      yPosition = 15;
    }
  };

  // ===== HEADER =====
  doc.setFontSize(24);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('', 'bold');
  doc.text(PERSONAL_INFO.fullName, margin, yPosition);
  yPosition += 10;

  // Designation
  doc.setFontSize(12);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.setFont('', 'normal');
  doc.text(PERSONAL_INFO.designation, margin, yPosition);
  yPosition += 6;

  // Contact info
  doc.setFontSize(10);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const contactInfo = `${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}`;
  doc.text(contactInfo, margin, yPosition);
  yPosition += 4;

  // Portfolio link subtly
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  const portfolioUrl = typeof window !== 'undefined' ? window.location.origin : (process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyab.github.io');
  doc.text(`Portfolio: ${portfolioUrl}`, margin, yPosition);
  yPosition += 6;

  // ===== PROFESSIONAL SUMMARY =====
  checkPageBreak(30);
  addSectionTitle('PROFESSIONAL SUMMARY');
  
  doc.setFontSize(10);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont('', 'normal');
  
  const bioText = getBioWithYears();
  const bioLines = doc.splitTextToSize(bioText, contentWidth);
  doc.text(bioLines, margin, yPosition);
  yPosition += bioLines.length * 3.5 + 4;

  // ===== EXPERIENCE =====
  checkPageBreak(40);
  addSectionTitle('PROFESSIONAL EXPERIENCE');

  EXPERIENCES.forEach((exp, index) => {
    checkPageBreak(18);

    // Job Title and Company
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('', 'bold');
    doc.text(exp.title, margin, yPosition);
    yPosition += 4;

    // Company and dates
    doc.setFontSize(10);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('', 'normal');
    doc.text(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, margin, yPosition);
    yPosition += 4;

    // Location
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(exp.location, margin, yPosition);
    yPosition += 4;

    // Description
    doc.setFontSize(10);
    const descLines = doc.splitTextToSize(exp.description, contentWidth);
    doc.text(descLines, margin, yPosition);
    yPosition += descLines.length * 3.5 + 2;

    // Key Responsibilities
    doc.setFontSize(9);
    doc.setFont('', 'bold');
    doc.text('Key Responsibilities:', margin, yPosition);
    yPosition += 3;

    exp.responsibilities.forEach((resp) => {
      doc.setFont('', 'normal');
      const respLines = doc.splitTextToSize(`• ${resp}`, contentWidth - 2);
      doc.text(respLines, margin + 2, yPosition);
      yPosition += respLines.length * 3 + 1;
    });

    // Technologies
    doc.setFont('', 'bold');
    doc.setFontSize(9);
    doc.text('Technologies:', margin, yPosition);
    yPosition += 3;

    const techText = exp.technologies.join(', ');
    const techLines = doc.splitTextToSize(techText, contentWidth - 2);
    doc.setFont('', 'normal');
    doc.text(techLines, margin + 2, yPosition);
    yPosition += techLines.length * 3 + 4;
  });

  // ===== EDUCATION =====
  checkPageBreak(30);
  addSectionTitle('EDUCATION');

  EDUCATIONS.forEach((edu) => {
    checkPageBreak(15);

    // Degree
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('', 'bold');
    doc.text(edu.degree, margin, yPosition);
    yPosition += 4;

    // Institution and dates
    doc.setFontSize(10);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('', 'normal');
    doc.text(`${edu.institution} | ${edu.startDate} - ${edu.endDate}`, margin, yPosition);
    yPosition += 4;

    // Location
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(edu.location, margin, yPosition);
    yPosition += 5;
  });

  // ===== SKILLS =====
  checkPageBreak(40);
  addSectionTitle('TECHNICAL SKILLS');

  const skillCategories = Array.from(new Set(SKILLS.map(s => s.category)));
  
  skillCategories.forEach((category) => {
    checkPageBreak(8);
    
    const categorySkills = SKILLS.filter(s => s.category === category);
    const skillNames = categorySkills.map(s => s.name).join(', ');

    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('', 'bold');
    doc.text(`${category}:`, margin, yPosition);
    yPosition += 3;

    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('', 'normal');
    const skillLines = doc.splitTextToSize(skillNames, contentWidth - 4);
    doc.text(skillLines, margin + 2, yPosition);
    yPosition += skillLines.length * 3 + 3;
  });
  // ===== PROJECTS =====
  checkPageBreak(40);
  addSectionTitle('PROJECTS');

  // Portfolio link (once, with padding)
  yPosition += 2;
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  const portfolioProjectsUrl = typeof window !== 'undefined' ? `${window.location.origin}/projects` : `${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyab.github.io'}/projects`;
  doc.text(`View all projects on portfolio: ${portfolioProjectsUrl}`, margin, yPosition);
  yPosition += 4;

  PROJECTS.forEach((project) => {
    checkPageBreak(12);

    // Project Title
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('', 'bold');
    doc.text(project.title, margin, yPosition);
    yPosition += 4;

    // Project Description
    doc.setFontSize(10);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('', 'normal');
    const descLines = doc.splitTextToSize(project.shortDescription, contentWidth);
    doc.text(descLines, margin, yPosition);
    yPosition += descLines.length * 3.5 + 2;

    // Technologies
    doc.setFontSize(9);
    doc.setFont('', 'bold');
    doc.text('Technologies:', margin, yPosition);
    yPosition += 3;

    const techText = project.technologies.join(', ');
    const techLines = doc.splitTextToSize(techText, contentWidth - 2);
    doc.setFont('', 'normal');
    doc.text(techLines, margin + 2, yPosition);
    yPosition += techLines.length * 3 + 3;
  });
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

  // Download the PDF
  doc.save(`${PERSONAL_INFO.fullName.replace(/\s+/g, '_')}_CV.pdf`);
};
