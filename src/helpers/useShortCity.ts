import { useEffect, useState } from 'react';

const cityMapper: Record<string, Towns> = {
  Екатеринбург: 'ekb',
  'Санкт-Петербург': 'spb',
  Москва: 'msc',
  'Нижний Новгород': 'nnov',
  Белгород: 'blg',
  Псков: 'psk',
};

export default function useShortCity(): Towns | null {
  function getCity(): string | null {
    return localStorage.getItem('city');
  }

  const [city, setCity] = useState<string | null>(getCity());

  useEffect(() => {
    const newCity = localStorage.getItem('city');
    if (newCity !== city) {
      setCity(newCity);
    }
  }, [localStorage.getItem('city')]);

  return city ? cityMapper[city] : null;
}
