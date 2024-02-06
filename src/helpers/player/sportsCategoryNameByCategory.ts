import SportsCategory from 'enums/sportsCategory';

const SportsCategoryNameByCategory: Record<SportsCategory, string> = {
  [SportsCategory.Master]: 'Мастер спорта',
  [SportsCategory.Candidate]: 'Кандидат в мастера спорта',
  [SportsCategory.AdultFirst]: 'Первый взрослый разряд',
  [SportsCategory.AdultSecond]: 'Второй взрослый разряд',
  [SportsCategory.AdultThird]: 'Третий взрослый разряд',
  [SportsCategory.JuniorFirst]: 'Первый юношеский разряд',
  [SportsCategory.JuniorSecond]: 'Второй юношеский разряд',
  [SportsCategory.JuniorThird]: 'Третий юношеский разряд',
};

export default SportsCategoryNameByCategory;
