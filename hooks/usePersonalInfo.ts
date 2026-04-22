import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo, getBioWithYears, PersonalInfo } from '@/data/personal-info';
import { Language } from '@/lib/language';

export const usePersonalInfo = (): PersonalInfo => {
  const { language } = useLanguage();
  return getPersonalInfo(language as Language);
};

export const usePersonalBio = (): string => {
  const { language } = useLanguage();
  return getBioWithYears(language as Language);
};
