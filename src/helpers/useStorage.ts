import { useState, useEffect } from 'react';

interface Cities {
  cities: Record<Towns, DgEvent>
}

type Storage = Record<'master' | 'train' | 'newbie' | 'pro', Cities>;

const sampleEvent: DgEvent = {
  textContent: `В ${new Date().getFullYear().toString()} году мы регулярно и бесплатно проводим мастер-классы! Приходи один или с друзьями - с собой ничего не нужно! Научись красиво и метко кидать фрисби, насладись красотой запущенного тобой диска - это действительно клёво!`,
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

const currentStorage: Storage = {
  master: {
    cities: {
      ekb: sampleEvent,
      spb: {
        textContent: 'Тренируйся вместе с нами!',
        eventData: {
          days: ['чт'],
          time: '19:00',
          place: {
            town: 'Санкт-Петербург',
            street: 'Ланской сад',
            comment: 'Диски и корзина есть - приходи, покажем/научим!',
          },
        },
      },
      nnov: {
        textContent: 'В описании ничего нет.',
        eventData: {
          days: ['сб'],
          time: '00:00',
          place: {
            town: 'Нижний Новгород',
            street: 'Парк Славы',
            comment: 'Свяжитесь с нами и мы проведём для вас мастер класс!',
          },
        },
      },
      msc: {
        textContent: 'В 2022 году мы регулярно и бесплатно проводим мастер-классы! Приходи один или с друзьями! Научись красиво и метко кидать фрисби, насладись красотой запущенного тобой диска - это действительно клёво!',
        eventData: {
          days: ['сб'],
          time: '10:00',
          place: {
            town: 'Москва',
            street: 'Косыгина 17',
            comment: 'Вход в Парк у Мальчиша-Кибальчиша.\nБлижайшее м. Воробьёвы горы',
          },
        },
      },
      blg: {
        textContent: 'А',
        eventData: {
          days: ['сб'],
          time: '12:00',
          place: {
            town: 'Белгород',
            street: 'Городской диск-гольф парк',
            comment: 'Свяжитесь с нами удобным вам способом(ниже) и мы проведём для вас мастер-класс!',
          },
        },
      },
      psk: {
        textContent: 'Пр',
        eventData: {
          days: ['сб'],
          time: '12:00',
          place: {
            town: 'Псков',
            street: 'Парки города',
            comment: 'Свяжитесь с нами удобным вам способом(ниже) и мы проведём для вас мастер-класс!',
          },
        },
      },
    },
  },
  train: sampleCities,
  newbie: {
    cities: {
      ekb: {
        textContent: 'Р',
        eventData: {
          days: ['сб', 'вс'],
          time: '10:00',
          place: {
            town: 'Екатеринбург',
            street: 'ГЛК "Уктус"',
            comment: '4 и 5 июня, 2022 года! Приходи и участвуй!',
          },
        },
      },
      spb: {
        textContent: 'Р',
        eventData: {
          days: ['сб'],
          time: '10:00',
          place: {
            town: 'Санкт-Петербург',
            street: 'Туутари парк',
            comment: '30 апреля, 2022 - первый этап Лиги СПб! Следи за подробностями в ТГ канале.',
          },
        },
      },
      nnov: {
        textContent: 'Второй этап национального тура!',
        eventData: {
          days: ['сб', 'вс'],
          time: '10:00',
          place: {
            town: 'Нижний Новгород',
            street: 'Парк Славы',
            comment: '7 и 8 мая, 2022 года!',
          },
        },
      },
      msc: sampleEvent,
      blg: {
        textContent: 'Первый этап национального тура!',
        eventData: {
          days: ['сб', 'вс'],
          time: '10:00',
          place: {
            town: 'Белгород',
            street: 'Городской диск-гольф парк.',
            comment: '23 и 24 апреля, 2022 года!',
          },
        },
      },
      psk: sampleEvent,
    },
  },
  pro: {
    cities: {
      ...sampleCities.cities,
      psk: {
        textContent: 'ЧР в этом году в Пскове!',
        eventData: {
          days: ['сб', 'вс'],
          time: '9:00',
          place: {
            town: 'Псков',
            street: 'Званское',
            comment: 'Главное событие года',
          },
        },
      },
    },
  },
};

const useStorage = (): Storage => {
  const [storage, setStorage] = useState<Storage>();

  useEffect(() => {
    setStorage(currentStorage);
  }, []);

  return storage || defaultStorage;
};

export default useStorage;
