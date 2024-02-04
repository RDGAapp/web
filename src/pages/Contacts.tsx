import styled from 'styled-components';

import PresidentImg from 'assets/images/president.webp';
import Contacts from 'components/Contacts';
import PageHeader from 'components/PageHeader';

const PresidentContainer = styled.div`
  overflow: hidden;
  display: flex;
  gap: 1rem;

  width: max-content;
  max-width: 80vw;
  height: 15rem;
  margin: auto auto 2rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;

  ${({ theme }) => theme.media.mobile} {
    height: 10rem;
  }
`;

const PresidentTextContainer = styled.div`
  overflow: hidden;
  height: max-content;
  margin: auto 2rem auto 0;
  color: ${({ theme }) => theme.colors.black};

  & * {
    overflow: hidden;

    width: 100%;
    max-width: max-content;

    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & h3 {
    font-size: 2.2rem;
  }

  & h4 {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
  }

  & a {
    display: block;
    transition: color 0.2s ease-in-out;

    &:hover,
    &:focus-visible {
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
