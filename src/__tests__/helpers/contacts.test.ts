import contacts from 'helpers/contacts';

describe('contacts helper', () => {
  test('should return array with set structure', () => {
    expect(contacts).toEqual([
      {
        code: 'ekb',
        town: 'Екатеринбург',
        phone: '+7 (343) 328 92 31',
        email: 'discgolfekb@ya.ru',
        instagram: 'https://www.instagram.com/discgolf_ekb',
        telegram: 'https://t.me/discgolf_ekb',
        vk: 'https://vk.com/discgolf_ekb',
      },
      {
        code: 'spb',
        town: 'Санкт-Петербург',
        phone: '+7 (981) 783 25 16',
        email: 'discgolfspb@gmail.com',
        instagram: 'https://www.instagram.com/discgolf_spb',
        telegram: 'https://t.me/discgolfspb',
        vk: 'https://vk.com/discgolfspb',
      },
      {
        code: 'msc',
        town: 'Москва',
        phone: '+7 (909) 988 44 22',
        email: 'discdog@mail.ru',
        site: 'https://discgolf.me',
        instagram: 'https://www.instagram.com/discgolf.msk',
        telegram: 'https://t.me/discgolfmsk',
        vk: 'https://vk.com/discgolfmsk',
      },
      {
        code: 'nn',
        town: 'Нижний Новгород',
        phone: '+7 (930) 813 33 99',
        phone2: '+7 (831) 414 21 23',
        email: 'discgolfnn@gmail.com',
        instagram: 'https://www.instagram.com/discgolfnn',
        telegram: 'https://t.me/discgolf_nn',
        vk: 'https://vk.com/discgolfnn',
      },
      {
        code: 'blg',
        town: 'Белгород',
        phone: '+7 (915) 566 68 08',
        email: 'discgolf31@mail.ru',
        instagram: 'https://www.instagram.com/discgolf31',
        telegram: 'https://t.me/discgolf31',
        vk: 'https://vk.com/discgolf31',
      },
      {
        code: 'psk',
        town: 'Псков',
        phone: '+7 (921) 004 07 24',
        email: 'discgolfpskov@gmail.com',
        instagram: 'https://www.instagram.com/discgolf.pskov',
        telegram: 'https://t.me/+Tv63ewM5Zuc3MTY6',
        vk: 'https://vk.com/discgolfpskov',
      },
      {
        code: 'tlt',
        town: 'Тольятти',
        phone: '+7 (927) 687 97 50',
        email: 'tfdf63@yandex.ru',
        site: 'https://tfdf.ru',
        instagram: 'https://www.instagram.com/tfdf63',
        telegram: 'https://t.me/tfdf63',
        vk: 'https://vk.com/tfdf63',
      },
      {
        code: 'klg',
        town: 'Калининград',
        phone: '+7 (906) 239 00 58',
        email: 'elena_iskritskaya@mail.ru',
        telegram: 'https://t.me/discgolf_Kaliningrad',
        vk: 'https://vk.com/discgolf_kaliningrad',
      },
      {
        code: 'nch',
        town: 'Набережные Челны',
        phone: '+7 (927) 048 03 84',
        email: 'lexa@chelny.com',
        telegram: 'https://t.me/dg_shilna_chat',
      },
      {
        code: 'vl',
        town: 'Великие Луки',
        phone: '+7 (953) 236 99 90',
        phone2: '+7 (999) 285 00 00',
        email: 'Alias_men@mail.ru',
        telegram: 'https://t.me/DiscGolf_VL',
        vk: 'https://vk.com/discgolfvl',
      },
      {
        code: 'ryb',
        town: 'Рыбинск',
        telegram: 'https://t.me/DiscGolfRybinsk',
      },
    ]);
  });

  test('should return array sorted alphabetically', () => {
    expect(contacts).toEqual(
      contacts.sort((a, b) => a.town.localeCompare(b.town)),
    );
  });
});
