import styled from 'styled-components';

import PresidentImg from 'assets/images/president.webp';
import Contacts from 'components/Contacts';
import PageHeader from 'components/PageHeader';

const PresidentContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
  max-width: 80vw;
  height: 15rem;
  margin: auto auto 2rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;

  ${({ theme }) => theme.media.mobile} {
    height: 10rem;
  }
`;

const PresidentTextContainer = styled.div`
  height: max-content;
  margin: auto 2rem auto 0;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};

  & * {
    width: 100%;
    max-width: max-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & h3 {
    font-size: 2.2rem;
  }

  & h4 {
    font-weight: normal;
    font-size: 1.5rem;
    font-style: italic;
  }

  & a {
    display: block;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${({ theme }) => theme.media.mobile} {
    margin: auto 1rem auto 0;

    & h3 {
      font-size: 1.35rem;
    }

    & h4 {
      font-size: 1rem;
    }
  }
`;

const ContactsPage = () => (
  <>
    <PageHeader text='Контакты' />
    <PresidentContainer>
      <img src={PresidentImg} alt='president' />
      <PresidentTextContainer>
        <h3 title='Сартаков Иван'>Сартаков Иван</h3>
        <h4 title='Руководитель РДГА'>Руководитель РДГА</h4>
        <a
          href='mailto:sartakov@yandex.ru'
          target='_blank'
          rel='noreferrer'
          title='sartakov@yandeх.ru'
        >
          sartakov@yandeх.ru
        </a>
        <a
          href='https://t.me/Sartakov_Ivan'
          target='_blank'
          rel='noreferrer'
          title='Telegram'
        >
          Telegram
        </a>
      </PresidentTextContainer>
    </PresidentContainer>
    <Contacts />
  </>
);

export default ContactsPage;
