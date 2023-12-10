import { useContext } from 'react';

import { TownContext } from 'hooks/TownContext';

const townMapper: Record<Town, ShortTown> = {
  Екатеринбург: 'ekb',
  'Санкт-Петербург': 'spb',
  Москва: 'msc',
  'Нижний Новгород': 'nnov',
  Белгород: 'blg',
  Псков: 'psk',
  Тольятти: 'tlt',
  Калининград: 'klg',
  'Набережные Челны': 'nch',
};

export default function useShortTown(): ShortTown | null {
  const { town } = useContext(TownContext);

  return town ? townMapper[town] : null;
}
