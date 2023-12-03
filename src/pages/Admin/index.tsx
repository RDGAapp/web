import { ReactComponent as PlayersSvg } from 'assets/icons/avatar.svg';
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import Breadcrumbs from 'components/Breadcrumbs';
import { Header } from 'components/PageContent';
import routes from 'helpers/routes';

import Section from './common/Section';
import Sections from './common/Sections';

const AdminPage = () => (
  <>
    <Breadcrumbs />
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
