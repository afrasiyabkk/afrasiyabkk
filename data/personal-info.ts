import { SKILLS } from './skills';
import { getYearsOfExperience } from '@/lib/utils';
import { Language } from '@/lib/language';

export interface PersonalInfo {
  fullName: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
  profileImage: string;
  skills: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  discord?: string;
  bio: string;
  portfolioUrl?: string;
}

// Generate unique skill names from SKILLS data
const generateSkillsString = (): string => {
  const uniqueSkills = Array.from(new Set(SKILLS.map(s => s.name)));
  return uniqueSkills.join(' | ');
};

// English Version
export const PERSONAL_INFO_EN: PersonalInfo = {
  fullName: 'Afrasiyab Nangyal Kakakhel',
  designation: 'Full Stack Developer | Team Lead',
  email: 'afrasiyab@example.com',
  phone: '+39 349 671 9730',
  address: 'Via Giambattista Odierna, 444, Ragusa 97100, Italy',
  profileImage: 'https://media.licdn.com/dms/image/v2/D4E35AQEwCp8SCSQ4JQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1655401649125?e=1775404800&v=beta&t=EZKE6mQjeoG7AyQslkCgg_-9Ykpmmo1dqy3RXfJ9KCI',
  skills: generateSkillsString(),
  linkedin: 'https://linkedin.com/in/afrasiyab',
  github: 'https://github.com/afrasiyab',
  twitter: 'https://twitter.com/afrasiyab',
  discord: 'https://discordapp.com/users/YOUR_DISCORD_ID',
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyab.github.io',
  bio: 'Full-stack developer and Team Lead with over {yearsOfExperience} years of experience developing web applications, frontend and backend systems, Android applications, API integration, automation solutions, and AI-based tools. I hold a master\'s degree in Finance and International Economics, which allows me to combine a solid analytical foundation with advanced technical skills. I currently work as a Full-Stack Developer and Team Lead, where I manage junior developers, collaborate directly with clients, and am responsible for development and to oversee the end-to-end development of complex software. I have also promoted the adoption of AI-assisted development practices within the company, mastering advanced prompt engineering techniques to leverage GitHub Copilot to its full potential, significantly improving team productivity and code quality. I am often the go-to person for solving complex technical issues, thanks to a structured approach to problem analysis and the ability to provide efficient and scalable solutions, even in high-pressure environments.',
};

// Italian Version
export const PERSONAL_INFO_IT: PersonalInfo = {
  fullName: 'Afrasiyab Nangyal Kakakhel',
  designation: 'Full Stack Developer | Team Lead',
  email: 'afrasiyab@example.com',
  phone: '+39 349 671 9730',
  address: 'Via Giambattista Odierna, 444, Ragusa 97100, Italia',
  profileImage: 'https://media.licdn.com/dms/image/v2/D4E35AQEwCp8SCSQ4JQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1655401649125?e=1775404800&v=beta&t=EZKE6mQjeoG7AyQslkCgg_-9Ykpmmo1dqy3RXfJ9KCI',
  skills: generateSkillsString(),
  linkedin: 'https://linkedin.com/in/afrasiyab',
  github: 'https://github.com/afrasiyab',
  twitter: 'https://twitter.com/afrasiyab',
  discord: 'https://discordapp.com/users/YOUR_DISCORD_ID',
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://afrasiyab.github.io',
  bio: 'Sviluppatore Full-Stack e Team Lead con oltre {yearsOfExperience} anni di esperienza nello sviluppo di applicazioni web, sistemi frontend e backend, applicazioni Android, integrazione API, soluzioni di automazione e strumenti basati su IA. Possiedo una laurea magistrale in Finanza ed Economia Internazionale, che mi consente di combinare una solida base analitica con competenze tecniche avanzate. Attualmente lavoro come Full-Stack Developer e Team Lead, dove gestisco sviluppatori junior, collaboro direttamente con i clienti e sono responsabile dello sviluppo e della supervisione dello sviluppo end-to-end di software complesso. Ho inoltre promosso l\'adozione di pratiche di sviluppo assistito da IA all\'interno dell\'azienda, padroneggiando tecniche avanzate di prompt engineering per sfruttare GitHub Copilot al massimo delle sue potenzialità, migliorando significativamente la produttività del team e la qualità del codice. Sono spesso la persona di riferimento per risolvere problemi tecnici complessi, grazie a un approccio strutturato all\'analisi dei problemi e alla capacità di fornire soluzioni efficienti e scalabili, anche in ambienti ad alta pressione.',
};

// Get personal info based on language
export const getPersonalInfo = (language: Language): PersonalInfo => {
  return language === 'it' ? PERSONAL_INFO_IT : PERSONAL_INFO_EN;
};

// Legacy export for backward compatibility
export const PERSONAL_INFO = PERSONAL_INFO_EN;

// Get bio with years of experience calculated and interpolated
export const getBioWithYears = (language: Language = 'en'): string => {
  const years = getYearsOfExperience();
  const personalInfo = getPersonalInfo(language);
  return personalInfo.bio.replace('{yearsOfExperience}', years.toString());
};
