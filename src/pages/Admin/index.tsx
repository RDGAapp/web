import { useContext } from 'react';

import PlayersSvg from 'assets/icons/avatar.svg?react';
import BlogSvg from 'assets/icons/blog.svg?react';
import CalendarSvg from 'assets/icons/calendar.svg?react';
import Breadcrumbs from 'components/Breadcrumbs';
import { Header } from 'components/PageContent';
import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';

import Section from './common/Section';
import Sections from './common/Sections';

const AdminPage = () => {
  const { roles } = useContext(AppSettingsContext);

  const isAdmin = roles.has(Role.Admin);

  return (
    <>
      <Breadcrumbs />
      <Header>Панель администратора</Header>
      <Sections>
        {isAdmin && (
          <>
            <Section to={routes.AdminPlayers}>
              <PlayersSvg />
              Игроки
            </Section>
            <Section to={routes.AdminTournaments}>
              <CalendarSvg />
              Турниры
            </Section>
          </>
        )}
        <Section to={routes.AdminBlog}>
          <BlogSvg />
          Блог
        </Section>
      </Sections>
    </>
  );
};

export default AdminPage;
