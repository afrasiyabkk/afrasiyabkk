/**
 * Calculate years of experience from a specific start date
 * @param startMonth - The month experience started (1-12, default: 11 for November)
 * @param startYear - The year experience started (default: 2020)
 * @returns Number of complete years since the start date
 */
export const getYearsOfExperience = (startMonth: number = 11, startYear: number = 2020): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11

  let yearsOfExperience = currentYear - startYear;

  // If we haven't reached the start month yet in the current year, subtract 1
  if (currentMonth < startMonth) {
    yearsOfExperience--;
  }

  return Math.max(yearsOfExperience, 1);
};

/**
 * Get the correct image path with basePath prefix for production
 * Locally: /media/image.png
 * Production (GitHub Pages): /afrasiyabkk/media/image.png?v=202605 (with monthly cache-buster)
 * Cache buster updates monthly to force fresh downloads
 */
export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/afrasiyabkk' : '';
  // Use date-based cache buster (YYYYMM format) that updates monthly
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const cacheBuster = process.env.NODE_ENV === 'production' ? `?v=${year}${month}` : '';
  return basePath + path + cacheBuster;
};

/**
 * Get the correct page path with basePath prefix for production
 * Locally: /projects, /experience, etc.
 * Production (GitHub Pages): /afrasiyabkk/projects, /afrasiyabkk/experience, etc.
 */
export const getPagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/afrasiyabkk' : '';
  return basePath + path;
};
