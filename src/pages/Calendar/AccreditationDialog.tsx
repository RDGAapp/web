import styled from 'styled-components';

import DocLink from 'components/DocLink';
import InlineLink from 'components/InlineLink';

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
      Аккредитация турнира клуба РДГА предполагает реализацию следующих
      процессов
    </p>
    <ol>
      <li>Расчет рейтинга для участвующих в турнире членов клуба РДГА</li>
      <li>
        Включение турнира в календарь клуба РДГА и публикация информации о
        турнире на ресурсах клуба РДГА
      </li>
      <li>Методическая помощь организатору турнира</li>
      <li>Оценка и контроль качества турнира</li>
      <li>
        Участие директора турнира в конкурсе клуба РДГА на лучшего организатора
        турниров
      </li>
    </ol>
    <DocLink
      text='Изучить весь порядок Аккредитации'
      fileUrl='/docs/tournamentAccreditation.pdf'
      fileName='rdga-tournament-accreditation'
    />
    <p style={{ fontWeight: 'bold' }}>Порядок аккредитации</p>
    <ol>
      <li>
        Зарегистрировать турнир на{' '}
        <InlineLink
          route='https://discgolfmetrix.com'
          text='Disc-Golf Metrix'
          isExternal
        />
      </li>
      <li>
        <InlineLink
          route='https://www.tinkoff.ru/cf/9mJN821ed7D'
          text='Оплатить'
          isExternal
        />{' '}
        аккредитацию
      </li>
      <li>
        Заполнить заявку по{' '}
        <InlineLink
          route='https://forms.gle/TqM3sLEzVWhwxMsG9'
          text='форме'
          isExternal
        />
      </li>
    </ol>
  </Container>
);

export default AccreditationDialog;
