import styled from 'styled-components';

import DocLink from 'components/DocLink';

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
  </Container>
);

export default AccreditationDialog;
