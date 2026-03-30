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

  return yearsOfExperience;
};
