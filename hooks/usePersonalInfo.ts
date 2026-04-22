import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo, getBioWithYears, PersonalInfo } from '@/data/personal-info';
import { getExperiences, getExperiencePageData, Experience, ExperiencePageData } from '@/data/experiences';
import { Language } from '@/lib/language';

export const usePersonalInfo = (): PersonalInfo => {
  const { language } = useLanguage();
  return getPersonalInfo(language as Language);
};

export const usePersonalBio = (): string => {
  const { language } = useLanguage();
  return getBioWithYears(language as Language);
};

export const useExperiences = (): Experience[] => {
  const { language } = useLanguage();
  return getExperiences(language as Language);
};

export const useExperiencePageData = (): ExperiencePageData => {
  const { language } = useLanguage();
  return getExperiencePageData(language as Language);
};
