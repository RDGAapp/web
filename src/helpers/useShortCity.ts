import useCity from './useCity';

const cityMapper: Record<string, Towns> = {
  Екатеринбург: 'ekb',
  'Санкт-Петербург': 'spb',
  Москва: 'msc',
  'Нижний Новгород': 'nnov',
  Белгород: 'blg',
  Псков: 'psk',
};

export default function useShortCity(): Towns | null {
  const city = useCity();

  return city ? cityMapper[city] : null;
}
