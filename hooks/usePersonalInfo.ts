import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo, getBioWithYears, PersonalInfo } from '@/data/personal-info';
import { getExperiences, getExperiencePageData, Experience, ExperiencePageData } from '@/data/experiences';
import { getEducations, getEducationPageData, Education, EducationPageData } from '@/data/education';
import { getSkills, getSkillsPageData, getCategoryTranslations, Skill, SkillsPageData, CategoryTranslations } from '@/data/skills';
import { getProjects, getProjectsPageData, getProjectDetailsPageData, Project, ProjectsPageData, ProjectDetailsPageData } from '@/data/projects';
import { getAboutPageData, AboutPageData } from '@/data/about';
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

export const useEducations = (): Education[] => {
  const { language } = useLanguage();
  return getEducations(language as Language);
};

export const useEducationPageData = (): EducationPageData => {
  const { language } = useLanguage();
  return getEducationPageData(language as Language);
};

export const useSkills = (): Skill[] => {
  const { language } = useLanguage();
  return getSkills(language as Language);
};

export const useSkillsPageData = (): SkillsPageData => {
  const { language } = useLanguage();
  return getSkillsPageData(language as Language);
};

export const useCategoryTranslations = (): CategoryTranslations => {
  const { language } = useLanguage();
  return getCategoryTranslations(language as Language);
};

export const useProjects = (): Project[] => {
  const { language } = useLanguage();
  return getProjects(language as Language);
};

export const useProjectsPageData = (): ProjectsPageData => {
  const { language } = useLanguage();
  return getProjectsPageData(language as Language);
};

export const useProjectDetailsPageData = (): ProjectDetailsPageData => {
  const { language } = useLanguage();
  return getProjectDetailsPageData(language as Language);
};

export const useAboutPageData = (): AboutPageData => {
  const { language } = useLanguage();
  return getAboutPageData(language as Language);
};
