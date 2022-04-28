import contacts from 'helpers/contacts';

describe('contacts helper', () => {
  test('should return array with set structure', () => {
    expect(contacts).toEqual([
      {
        city: 'Екатеринбург',
        phone: '+7 (343) 328 92 31',
        email: 'discgolfekb@ya.ru',
        instagram: 'https://www.instagram.com/discgolf_ekb',
        telegram: 'https://t.me/discgolf_ekb',
        vk: 'https://vk.com/discgolf_ekb',
      },
      {
        city: 'Санкт-Петербург',
        phone: '+7 (981) 783 25 16',
        email: 'discgolfspb@gmail.com',
        instagram: 'https://www.instagram.com/discgolf_spb',
        telegram: 'https://t.me/discgolfspb',
        vk: 'https://vk.com/discgolfspb',
      },
      {
        city: 'Москва',
        phone: '+7 (916) 780 81 68',
        email: 'Discgolf.msk@gmail.com',
        site: 'https://discgolf.me',
        instagram: 'https://www.instagram.com/discgolf.msk',
        telegram: 'https://t.me/discgolfpro',
        vk: 'https://vk.com/discgolfmsk',
      },
      {
        city: 'Нижний Новгород',
        phone: '+7 (930) 813 33 99',
        phone2: '+7 (831) 414 21 23',
        email: 'discgolfnn@gmail.com',
        instagram: 'https://www.instagram.com/discgolfnn',
        telegram: 'https://t.me/discgolfnn',
        vk: 'https://vk.com/discgolfnn',
      },
      {
        city: 'Белгород',
        phone: '+7 (915) 566 68 08',
        email: 'discgolf31@mail.ru',
        instagram: 'https://www.instagram.com/discgolf31',
        telegram: 'https://t.me/discgolf31',
        vk: 'https://vk.com/discgolf31',
      },
      {
        city: 'Псков',
        phone: '+7 (921) 004 07 24',
        email: 'discgolfpskov@gmail.com',
        instagram: 'https://www.instagram.com/discgolf.pskov',
        telegram: 'https://t.me/+Tv63ewM5Zuc3MTY6',
        vk: 'https://vk.com/discgolfpskov',
      },
      {
        city: 'Тольятти',
        phone: '+7 (927) 687 97 50',
        email: 'tfdf63@yandex.ru',
        site: 'https://tfdf.ru',
        instagram: 'https://www.instagram.com/tfdf63',
        telegram: 'https://t.me/tfdf63',
        vk: 'https://vk.com/tfdf63',
      },
      {
        city: 'Калининград',
        phone: '+7 (906) 239 00 58',
        email: 'elena_iskritskaya@mail.ru',
        telegram: 'https://t.me/discgolf_Kaliningrad',
        vk: 'https://vk.com/discgolf_kaliningrad',
      },
    ]);
  });

  test('should return array sorted alphabetically', () => {
    expect(contacts).toEqual(contacts.sort((a, b) => a.city.localeCompare(b.city)));
  });
});
