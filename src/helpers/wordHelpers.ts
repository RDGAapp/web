export const capitalizeFirstLetter = (
  string: string,
) => string.charAt(0).toUpperCase() + string.slice(1);

export function spell(number: number, titles: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  if (number === 0) {
    if (titles[0] === 'сотрудник') {
      return 'Не выбраны сотрудники';
    }
    return titles[2];
  }
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
