import styled from 'styled-components';

import CustomLink from 'components/CustomLink';

import AccreditationDocLink from './AccreditationDocLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const AccreditationDialog = () => (
  <Container>
    <p style={{ fontWeight: 'bold' }}>
      Аккредитация турнира РДГА предполагает реализацию следующих процессов
    </p>
    <ol>
      <li>Расчет рейтинга для участвующих в турнире членов РДГА</li>
      <li>
        Включение турнира в календарь РДГА и публикация информации о турнире на
        ресурсах РДГА
      </li>
      <li>Методическая помощь организатору турнира</li>
      <li>Оценка и контроль качества турнира</li>
      <li>
        Участие директора турнира в конкурсе РДГА на лучшего организатора
        турниров
      </li>
    </ol>
    <AccreditationDocLink />
    <p style={{ fontWeight: 'bold' }}>Порядок аккредитации</p>
    <ol>
      <li>
        Зарегистрировать турнир на{' '}
        <CustomLink
          route='https://discgolfmetrix.com'
          text='Disc-Golf Metrix'
          isExternal
        />
      </li>
      <li>
        <CustomLink
          route='https://www.tinkoff.ru/cf/9mJN821ed7D'
          text='Оплатить'
          isExternal
        />{' '}
        аккредитацию
      </li>
      <li>
        Заполнить заявку по{' '}
        <CustomLink
          route='https://forms.gle/TqM3sLEzVWhwxMsG9'
          text='форме'
          isExternal
        />
      </li>
    </ol>
  </Container>
);

export default AccreditationDialog;
