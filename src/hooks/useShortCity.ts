import { useContext } from 'react';

import { CityContext } from 'hooks/CityContext';

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
  const { city } = useContext(CityContext);

  return city ? cityMapper[city] : null;
}
