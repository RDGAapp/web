import { useState, useEffect } from 'react';

interface Cities {
  cities: Record<Towns, DgEvent>
}

type Storage = Record<'master' | 'train' | 'newbie' | 'pro', Cities>;

const sampleEvent: DgEvent = {
  textContent: 'В 2021 году мы регулярно и бесплатно проводим мастер-классы! Приходи один или с друзьями - с собой ничего не нужно! Научись красиво и метко кидать фрисби, насладись красотой запущенного тобой диска - это действительно клёво!',
  eventData: {
    days: ['пт', 'сб', 'вс'],
    time: '18:00',
    place: {
      town: 'Уктус',
      street: 'Зимняя, 1',
      comment: 'Яркий стенд у подножия главного склона ',
    },
  },
};

const sampleCities: Cities = {
  cities: {
    ekb: sampleEvent,
    spb: sampleEvent,
    nnov: sampleEvent,
    msc: sampleEvent,
    blg: sampleEvent,
    psk: sampleEvent,
  },
};

const defaultStorage: Storage = {
  master: sampleCities,
  train: sampleCities,
  newbie: sampleCities,
  pro: sampleCities,
};

const useStorage = (): Storage => {
  const [storage, setStorage] = useState<Storage>();

  useEffect(() => {
    fetch('/api/getContent').then(async (response) => {
      if (!response.ok) return;
      const data: Storage = await response.json();
      setStorage(data);
    });
  }, []);

  return storage || defaultStorage;
};

export default useStorage;
