import SportsCategory from 'enums/sportsCategory';

const SportsCategoryNameByCategory: Record<SportsCategory, string> = {
  [SportsCategory.Master]: 'Мастер спорта',
  [SportsCategory.Candidate]: 'Кандидат в мастера',
  [SportsCategory.AdultFirst]: 'Первый разряд',
  [SportsCategory.AdultSecond]: 'Второй разряд',
  [SportsCategory.AdultThird]: 'Третий разряд',
  [SportsCategory.JuniorFirst]: 'Первый юношеский разряд',
  [SportsCategory.JuniorSecond]: 'Второй юношеский разряд',
  [SportsCategory.JuniorThird]: 'Третий юношеский разряд',
};

export default SportsCategoryNameByCategory;
