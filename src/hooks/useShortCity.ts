import useCity from 'hooks/useCity';

const cityMapper: Record<string, Towns> = {
  Екатеринбург: 'ekb',
  'Санкт-Петербург': 'spb',
  Москва: 'msc',
  'Нижний Новгород': 'nnov',
  Белгород: 'blg',
  Псков: 'psk',
  Тольятти: 'tlt',
  Калининград: 'klg',
};

export default function useShortCity(): Towns | null {
  const city = useCity();

  return city ? cityMapper[city] : null;
}
