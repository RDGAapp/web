import { useEffect, useState } from 'react';

export function changeCity(city: string): void {
  localStorage.setItem('city', city);
}

export default function useCity(): string | null {
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

  return city;
}
