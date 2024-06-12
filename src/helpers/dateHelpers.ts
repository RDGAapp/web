import { capitalizeFirstLetter } from 'helpers/wordHelpers';

const getMonday = (date: Date) => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(date.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
};

const weeksToDisplay = 51;

const addDays = (date: Date, number: number) => {
  const newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + number);
  return newDate;
};

const getWeekDaysArray = (mondayDate: Date) => {
  const array = [
    mondayDate,
    addDays(mondayDate, 1),
    addDays(mondayDate, 2),
    addDays(mondayDate, 3),
    addDays(mondayDate, 4),
    addDays(mondayDate, 5),
    addDays(mondayDate, 6),
  ];
  array[6].setHours(23, 59, 59, 999);
  return array;
};

export const getMonthName = (date: Date) =>
  capitalizeFirstLetter(date.toLocaleString('ru-RU', { month: 'long' }));

const getMonthNameForWeek = (weekStartDate: Date) =>
  getMonthName(addDays(weekStartDate, 6));

export const getCalendarData = () => {
  const now = new Date();
  let startDate = getMonday(now);
  let currentMonthName = getMonthNameForWeek(startDate);
  let currentMonthIndex = 0;

  const monthsArray = [
    {
      monthName: currentMonthName,
      weeks: [getWeekDaysArray(startDate)],
      shouldGreyOut: true,
    },
  ];

  for (let i = 0; i < weeksToDisplay; i += 1) {
    startDate = addDays(startDate, 7);
    const monthName = getMonthNameForWeek(startDate);
    if (monthName !== currentMonthName) {
      monthsArray.push({
        monthName,
        weeks: [getWeekDaysArray(startDate)],
        shouldGreyOut: !monthsArray[currentMonthIndex].shouldGreyOut,
      });
      currentMonthName = monthName;
      currentMonthIndex += 1;
    } else {
      monthsArray[currentMonthIndex].weeks.push(getWeekDaysArray(startDate));
    }
  }

  return monthsArray;
};

export const spellMonth = (month: number) => {
  const monthsSpellingArray = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  return monthsSpellingArray[month];
};

export const getDisplayDate = (date: Date) => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  const compDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const diff = today.getTime() - compDate.getTime();
  if (compDate.getTime() === today.getTime()) {
    return 'Сегодня';
  }
  if (diff <= 24 * 60 * 60 * 1000) {
    return 'Вчера';
  }
  return compDate.toLocaleDateString();
};

export function getInputDate(dateString: string, includeTime = true): string {
  const jsDate = new Date(dateString);
  const timeOffset = jsDate.getTimezoneOffset();
  return new Date(jsDate.getTime() - timeOffset * 60000)
    .toISOString()
    .slice(0, includeTime ? 16 : 10);
}
