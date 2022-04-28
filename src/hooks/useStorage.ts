type Cities = Record<Towns, DgEvent | null>

type Storage = Record<'master' | 'train' | 'newbie' | 'pro', Cities>;

const sampleCities: Cities = {
  ekb: null,
  spb: null,
  nnov: null,
  msc: null,
  blg: null,
  psk: null,
  tlt: null,
  klg: null,
};

const currentStorage: Storage = {
  master: {
    ...sampleCities,
    spb: {
      days: ['чт'],
      time: '19:00',
      place: {
        town: 'Санкт-Петербург',
        street: 'Ланской сад',
        comment: 'Диски и корзина есть - приходи, покажем/научим!',
      },
    },
    nnov: {
      days: ['сб'],
      time: '00:00',
      place: {
        town: 'Нижний Новгород',
        street: 'Парк Славы',
        comment: 'Свяжитесь с нами и мы проведём для вас мастер класс!',
      },
    },
    msc: {
      days: ['сб'],
      time: '10:00',
      place: {
        town: 'Москва',
        street: 'Косыгина 17',
        comment: 'Вход в Парк у Мальчиша-Кибальчиша.\nБлижайшее м. Воробьёвы горы',
      },
    },
    blg: {
      days: ['сб'],
      time: '12:00',
      place: {
        town: 'Белгород',
        street: 'Городской диск-гольф парк',
        comment: 'Свяжитесь с нами удобным вам способом(ниже) и мы проведём для вас мастер-класс!',
      },
    },
    psk: {
      days: ['сб'],
      time: '12:00',
      place: {
        town: 'Псков',
        street: 'Парки города',
        comment: 'Свяжитесь с нами удобным вам способом(ниже) и мы проведём для вас мастер-класс!',
      },
    },
  },
  train: sampleCities,
  newbie: {
    ...sampleCities,
    ekb: {
      days: ['сб', 'вс'],
      time: '10:00',
      place: {
        town: 'Екатеринбург',
        street: 'ГЛК "Уктус"',
        comment: '4 и 5 июня, 2022 года! Приходи и участвуй!',
      },
    },
    spb: {
      days: ['сб'],
      time: '10:00',
      place: {
        town: 'Санкт-Петербург',
        street: 'Туутари парк',
        comment: '30 апреля, 2022 - первый этап Лиги СПб! Следи за подробностями в ТГ канале.',
      },
    },
    nnov: {
      days: ['сб', 'вс'],
      time: '10:00',
      place: {
        town: 'Нижний Новгород',
        street: 'Парк Славы',
        comment: '7 и 8 мая, 2022 года!',
      },
    },
    blg: {
      days: ['сб', 'вс'],
      time: '10:00',
      place: {
        town: 'Белгород',
        street: 'Городской диск-гольф парк.',
        comment: '23 и 24 апреля, 2022 года!',
      },
    },
  },
  pro: {
    ...sampleCities,
    psk: {
      days: ['сб', 'вс'],
      time: '9:00',
      place: {
        town: 'Псков',
        street: 'Званское',
        comment: 'Главное событие года',
      },
    },
  },
};

const useStorage = (): Storage => currentStorage;

export default useStorage;
