export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export function spell(number: number, titles: [string, string, string]) {
  const cases = [2, 0, 1, 1, 1, 2];
  if (number === 0) {
    return titles[2];
  }
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

export const clearNumber = (number: string) => {
  const phoneAllowedCharsRegExp = /[^1,2,3,4,5,6,7,8,9,0]/g;

  return `+${number.replace(phoneAllowedCharsRegExp, '')}`;
};
