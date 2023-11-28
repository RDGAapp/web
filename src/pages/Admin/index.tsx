import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as PlayersSvg } from 'assets/icons/avatar.svg';
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import ButtonOutlined from 'components/ButtonOutlined';
import { Header } from 'components/PageContent';
import routes from 'helpers/routes';

const Sections = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Section = styled(Link)`
  ${ButtonOutlined};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0;

  & svg {
    height: 1rem;
  }
`;

const AdminPage = () => (
  <>
    <Header>Панель администратора</Header>
    <Sections>
      <Section to={routes.AdminPlayers}>
        <PlayersSvg />
        Игроки
      </Section>
      <Section to={routes.AdminTournaments}>
        <CalendarSvg />
        Турниры
      </Section>
    </Sections>
  </>
);

export default AdminPage;
