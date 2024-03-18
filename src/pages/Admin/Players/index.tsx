import PlusSvg from 'assets/icons/plus.svg?react';
import RefreshSvg from 'assets/icons/refresh.svg?react';
import RenewSvg from 'assets/icons/renew.svg?react';
import TrashSvg from 'assets/icons/trash.svg?react';
import Breadcrumbs from 'components/Breadcrumbs';
import { Header } from 'components/PageContent';
import routes from 'helpers/routes';

import Section from '../common/Section';
import Sections from '../common/Sections';

const Players = () => (
  <>
    <Breadcrumbs />
    <Header>Действия над игроком</Header>
    <Sections>
      <Section to={routes.AdminPlayersCreate}>
        <PlusSvg />
        Создать
      </Section>
      <Section to={routes.AdminPlayersUpdate}>
        <RefreshSvg />
        Обновить
      </Section>
      <Section to={routes.AdminPlayersDelete}>
        <TrashSvg />
        Удалить
      </Section>
      <Section to={routes.AdminPlayersRenew}>
        <RenewSvg />
        Активировать подписку
      </Section>
    </Sections>
  </>
);

export default Players;
