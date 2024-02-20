import styled from 'styled-components';

import PresidentImg from 'assets/images/president.webp';
import VicePresidentImg from 'assets/images/vice-president.webp';
import PageHeader from 'components/PageHeader';

import Contacts from './Contacts';

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

const VicePresidentContainer = styled(PresidentContainer)`
  height: 12rem;

  ${({ theme }) => theme.media.mobile} {
    height: 9rem;
  }
`;

const VicePresidentTextContainer = styled(PresidentTextContainer)`
  & h3 {
    font-size: 2rem;
  }

  & h4 {
    font-size: 1rem;
  }

  & a {
    font-size: 0.8rem;
  }

  ${({ theme }) => theme.media.mobile} {
    & h3 {
      font-size: 1.2rem;
    }

    & h4 {
      font-size: 0.9rem;
    }
  }
`;

const AdditionalInfo = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`;

const ContactsPage = () => (
  <>
    <PageHeader text='Контакты' />
    <PresidentContainer>
      <img src={PresidentImg} alt='president' />
      <PresidentTextContainer>
        <h3 title='Сартаков Иван'>Сартаков Иван</h3>
        <h4 title='Президент РДГА'>Президент РДГА</h4>
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
    <VicePresidentContainer>
      <img src={VicePresidentImg} alt='vice_president' />
      <VicePresidentTextContainer>
        <h3 title='Голубев Кирилл'>Голубев Кирилл</h3>
        <h4 title='Вице-президент РДГА'>Вице-президент РДГА</h4>
        <a
          href='mailto:forglik@yandex.ru'
          target='_blank'
          rel='noreferrer'
          title='forglik@yandeх.ru'
        >
          forglik@yandeх.ru
        </a>
        <a
          href='https://t.me/MrGlik'
          target='_blank'
          rel='noreferrer'
          title='Telegram'
        >
          Telegram
        </a>
      </VicePresidentTextContainer>
    </VicePresidentContainer>
    <Contacts />
    <AdditionalInfo>
      <h2>Реквизиты некоммерческой организации</h2>
      <p>
        Свердловская региональная физкультурно-спортивная общественная
        организация &quot;Федерация флаинг диска Свердловской области&quot; (в
        стадии переоформления в Минюсте в “Межрегиональная диск-гольф
        ассоциация”).
      </p>
      <div>
        <h3>Единоличный исполнительный орган:</h3>
        <p>
          Президент Сартаков Иван Михайлович, действующий на основании Устава.
        </p>
      </div>
      <div>
        <h3>Юридический адрес:</h3>
        <p>
          620144, Свердловская область, г. Екатеринбург, ул. Авиационная, дом
          16, квартира 108.
        </p>
      </div>
      <div>
        <h3>Коды по общероссийским классификаторам:</h3>
        <p>ИНН/КПП 6679109827 / 667901001</p>
        <p>ОГРН 1176600002325</p>
        <p>ОКПО 19066438</p>
        <p>ОКАТО 65401390000</p>
        <p>ОКТМО 65701000001</p>
        <p>ОКОГУ 4220003</p>
        <p>ОКФС 53</p>
        <p>ОКОПФ 20200</p>
      </div>
      <div>
        <h3>Банковские реквизиты:</h3>
        <p>р/с 40703810416540005443</p>
        <p>в УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК</p>
        <p>БИК 046577674</p>
        <p>к/с 30101810500000000674</p>
      </div>
    </AdditionalInfo>
  </>
);

export default ContactsPage;
