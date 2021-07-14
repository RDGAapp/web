import styled from 'styled-components';
import Logo from 'components/Logo';
import Contact from 'components/Contact';
import useWindowDimensions from '../helpers/useWindowDimensions';

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

const Footer = (): JSX.Element => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <Header>Контакты</Header>
      <ContactsWrapper>
        <Contact
          city="Екатеринбург"
          phone="+7 343 328 92 31"
          email="discgolfekb@yandex.ru"
          instagram="https://www.instagram.com/discgolf_ekb/"
          telegram="link"
          vk="https://vk.com/discgolf_ekb"
        />
        <Contact
          city="Санкт-Петербург"
          phone="+7 000 000 00 00"
          email="spbmail@mail.ru"
          instagram="https://www.instagram.com/discgolf_ekb/"
          telegram="link"
          vk="https://vk.com/discgolf_ekb"
        />
        <Contact
          city="Москва"
          phone="+7 000 000 00 00"
          email="mskmail@mail.ru"
          instagram="https://www.instagram.com/discgolf_ekb/"
          telegram="link"
          vk="https://vk.com/discgolf_ekb"
        />
        <Contact
          city="Нижний Новгород"
          phone="+7 000 000 00 00"
          email="nizhmail@mail.ru"
          instagram="https://www.instagram.com/discgolf_ekb/"
          telegram="link"
          vk="https://vk.com/discgolf_ekb"
        />
        <Contact
          city="Белгород"
          phone="+7 000 000 00 00"
          email="belmail@mail.ru"
          instagram="https://www.instagram.com/discgolf_ekb/"
          telegram="link"
          vk="https://vk.com/discgolf_ekb"
        />
      </ContactsWrapper>
      <BottomWrapper>
        <Logo big={width >= 1024} />
        <Copyright>© ФЕДЕРАЦИЯ ФЛАИНГ ДИСКА СВЕРДЛОВСКОЙ ОБЛАСТИ, 2021</Copyright>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Footer;
