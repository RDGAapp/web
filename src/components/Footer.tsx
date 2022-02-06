import styled from 'styled-components';
import Logo from 'components/Logo';
import Contact from 'components/Contact';
import appTheme from 'helpers/theme';
import useWindowDimensions from 'helpers/useWindowDimensions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.yellow};
  padding: 60px 20px;
`;

const Header = styled.h1`
  font-family: Oswald, sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  width: 100%;
  margin: 0 0 60px;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 60px;
`;

const Copyright = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  align-self: flex-end;

  ${({ theme }) => theme.breakpoints.tablet} {
    align-self: center;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;

const contacts = [
  {
    city: 'Екатеринбург',
    phone: '+7 (343) 328 92 31',
    email: 'discgolfekb@ya.ru',
    instagram: 'https://www.instagram.com/discgolf_ekb/',
    telegram: 'https://t.me/discgolf_ekb',
    vk: 'https://vk.com/discgolf_ekb',
  },
  {
    city: 'Санкт-Петербург',
    phone: '+7 (981) 783 25 16',
    email: 'discgolfspb@gmail.com',
    instagram: 'https://www.instagram.com/discgolf_spb/',
    telegram: 'https://t.me/discgolfspb',
    vk: 'https://vk.com/discgolfspb',
  },
  {
    city: 'Москва',
    phone: '+7 (916) 780 81 68',
    email: 'Discgolf.msk@gmail.com',
    site: 'discgolf.me',
    instagram: 'https://www.instagram.com/discgolf.msk/',
    telegram: 'https://t.me/discgolfpro',
    vk: 'https://vk.com/discgolfmsk',
  },
  {
    city: 'Нижний Новгород',
    phone: '+7 (910) 058 21 21',
    email: 'discgolfnn@gmail.com',
    instagram: 'https://www.instagram.com/discgolfnn/',
    telegram: 'https://t.me/discgolfnn',
    vk: 'https://vk.com/discgolfnn',
  },
  {
    city: 'Белгород',
    phone: '+7 (915) 566 68 08',
    email: 'discgolf31@mail.ru',
    instagram: 'https://www.instagram.com/discgolf31/',
    telegram: 'https://t.me/discgolf31',
    vk: 'https://m.vk.com/discgolf31',
  },
  {
    city: 'Псков',
    phone: '+7 000 000 00 00',
    email: 'discgolfpskov@gmail.com',
    instagram: 'https://www.instagram.com/discgolf.pskov/',
    telegram: 'link',
    vk: 'https://vk.com/discgolfpskov',
  },
  {
    city: 'Тольяти',
    phone: '+7 (927) 687 97 50',
    email: 'https://tfdf.ru/',
    instagram: 'https://www.instagram.com/tfdf63/',
    telegram: 'https://t.me/tfdf63',
    vk: 'https://vk.com/tfdf63',
  },
];

const Footer = (): JSX.Element => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper id="contacts">
      <Header>Контакты</Header>
      <ContactsWrapper>
        {contacts.map((contact) => (
          <Contact
            key={contact.city}
            phone={contact.phone}
            email={contact.email}
            city={contact.city}
            site={contact.site}
            instagram={contact.instagram}
            telegram={contact.telegram}
            vk={contact.vk}
          />
        ))}
      </ContactsWrapper>
      <BottomWrapper>
        <Logo big={width >= appTheme.breakpoints.tabletPx} />
        <Copyright>© АССОЦИАЦИЯ ИГРОКОВ В ДИСК-ГОЛЬФ</Copyright>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Footer;
