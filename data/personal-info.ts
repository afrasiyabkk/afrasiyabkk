import { SKILLS } from './skills';
import { getYearsOfExperience } from '@/lib/utils';

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
}

// Generate unique skill names from SKILLS data
const generateSkillsString = (): string => {
  const uniqueSkills = Array.from(new Set(SKILLS.map(s => s.name)));
  return uniqueSkills.join(' | ');
};

export const PERSONAL_INFO: PersonalInfo = {
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
  bio: 'Full-stack developer with over {yearsOfExperience} years of experience developing web applications, backend and frontend systems, Android applications, API integration, automation solutions, and AI-based tools. I hold a master\'s degree in Finance and International Economics, which allows me to combine a solid analytical foundation with advanced technical skills. I currently work as a Full-Stack Developer and Team Lead, where I manage junior developers, collaborate directly with clients, and oversee the end-to-end development of complex software. I have also promoted the adoption of AI-assisted development practices within the company, mastering advanced prompt engineering techniques to leverage GitHub Copilot to its full potential, significantly improving team productivity and code quality. I am often the go-to person for solving complex technical issues, thanks to a structured approach to problem analysis and the ability to provide efficient and scalable solutions, even in high-pressure environments.',
};

// Get bio with years of experience calculated and interpolated
export const getBioWithYears = (): string => {
  const years = getYearsOfExperience();
  return PERSONAL_INFO.bio.replace('{yearsOfExperience}', years.toString());
};
