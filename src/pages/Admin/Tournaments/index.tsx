import PlusSvg from 'assets/icons/plus.svg?react';
import RefreshSvg from 'assets/icons/refresh.svg?react';
import TrashSvg from 'assets/icons/trash.svg?react';
import Breadcrumbs from 'components/Breadcrumbs';
import { Header } from 'components/PageContent';
import routes from 'helpers/routes';

import Section from '../common/Section';
import Sections from '../common/Sections';

const Tournaments = () => (
  <>
    <Breadcrumbs />
    <Header>Действия над турниром</Header>
    <Sections>
      <Section to={routes.AdminTournamentsCreate}>
        <PlusSvg />
        Создать
      </Section>
      <Section to={routes.AdminTournamentsUpdate}>
        <RefreshSvg />
        Обновить
      </Section>
      <Section to={routes.AdminTournamentsDelete}>
        <TrashSvg />
        Удалить
      </Section>
    </Sections>
  </>
);

export default Tournaments;
