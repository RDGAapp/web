import SportsCategory from 'enums/sportsCategory';

export const SportsCategoryColorByCategory: Record<SportsCategory, string> = {
  [SportsCategory.Master]: 'additional',
  [SportsCategory.Candidate]: 'secondary',
  [SportsCategory.AdultFirst]: 'white',
  [SportsCategory.AdultSecond]: 'white',
  [SportsCategory.AdultThird]: 'white',
  [SportsCategory.JuniorFirst]: 'white',
  [SportsCategory.JuniorSecond]: 'white',
  [SportsCategory.JuniorThird]: 'white',
};

export const SportsCategoryTextColorByCategory: Record<SportsCategory, string> = {
  [SportsCategory.Master]: 'white',
  [SportsCategory.Candidate]: 'white',
  [SportsCategory.AdultFirst]: 'secondary',
  [SportsCategory.AdultSecond]: 'secondary',
  [SportsCategory.AdultThird]: 'secondary',
  [SportsCategory.JuniorFirst]: 'secondary',
  [SportsCategory.JuniorSecond]: 'secondary',
  [SportsCategory.JuniorThird]: 'secondary',
};
