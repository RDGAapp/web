import { ReactComponent as BlgSvg } from 'assets/icons/blg.svg';
import { ReactComponent as EkbSvg } from 'assets/icons/ekb.svg';
import { ReactComponent as KlgSvg } from 'assets/icons/klg.svg';
import { ReactComponent as RdgaSvg } from 'assets/icons/logo.svg';
import { ReactComponent as MscSvg } from 'assets/icons/msc.svg';
import { ReactComponent as NnSvg } from 'assets/icons/nn.svg';
import { ReactComponent as PskSvg } from 'assets/icons/psk.svg';
import { ReactComponent as SpbSvg } from 'assets/icons/spb.svg';
import { ReactComponent as TltSvg } from 'assets/icons/tlt.svg';
import { IContact } from 'types/contact';

const contacts: IContact[] = [
  {
    Image: EkbSvg,
    town: 'Екатеринбург',
    phone: '+7 (343) 328 92 31',
    email: 'discgolfekb@ya.ru',
    instagram: 'https://www.instagram.com/discgolf_ekb',
    telegram: 'https://t.me/discgolf_ekb',
    vk: 'https://vk.com/discgolf_ekb',
  },
  {
    Image: SpbSvg,
    town: 'Санкт-Петербург',
    phone: '+7 (981) 783 25 16',
    email: 'discgolfspb@gmail.com',
    instagram: 'https://www.instagram.com/discgolf_spb',
    telegram: 'https://t.me/discgolfspb',
    vk: 'https://vk.com/discgolfspb',
  },
  {
    Image: MscSvg,
    town: 'Москва',
    phone: '+7 (916) 780 81 68',
    email: 'Discgolf.msk@gmail.com',
    site: 'https://discgolf.me',
    instagram: 'https://www.instagram.com/discgolf.msk',
    telegram: 'https://t.me/discgolfpro',
    vk: 'https://vk.com/discgolfmsk',
  },
  {
    Image: NnSvg,
    town: 'Нижний Новгород',
    phone: '+7 (930) 813 33 99',
    phone2: '+7 (831) 414 21 23',
    email: 'discgolfnn@gmail.com',
    instagram: 'https://www.instagram.com/discgolfnn',
    telegram: 'https://t.me/discgolfnn',
    vk: 'https://vk.com/discgolfnn',
  },
  {
    Image: BlgSvg,
    town: 'Белгород',
    phone: '+7 (915) 566 68 08',
    email: 'discgolf31@mail.ru',
    instagram: 'https://www.instagram.com/discgolf31',
    telegram: 'https://t.me/discgolf31',
    vk: 'https://vk.com/discgolf31',
  },
  {
    Image: PskSvg,
    town: 'Псков',
    phone: '+7 (921) 004 07 24',
    email: 'discgolfpskov@gmail.com',
    instagram: 'https://www.instagram.com/discgolf.pskov',
    telegram: 'https://t.me/+Tv63ewM5Zuc3MTY6',
    vk: 'https://vk.com/discgolfpskov',
  },
  {
    Image: TltSvg,
    town: 'Тольятти',
    phone: '+7 (927) 687 97 50',
    email: 'tfdf63@yandex.ru',
    site: 'https://tfdf.ru',
    instagram: 'https://www.instagram.com/tfdf63',
    telegram: 'https://t.me/tfdf63',
    vk: 'https://vk.com/tfdf63',
  },
  {
    Image: KlgSvg,
    town: 'Калининград',
    phone: '+7 (906) 239 00 58',
    email: 'elena_iskritskaya@mail.ru',
    telegram: 'https://t.me/discgolf_Kaliningrad',
    vk: 'https://vk.com/discgolf_kaliningrad',
  },
  {
    Image: RdgaSvg,
    town: 'Набережные Челны',
    phone: '+7 (927) 048 03 84',
    email: 'lexa@chelny.com',
    telegram: 'https://t.me/dg_shilna_chat',
  },
];

export default contacts;
