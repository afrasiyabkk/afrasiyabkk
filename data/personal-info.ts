import { SKILLS } from './skills';

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
};
