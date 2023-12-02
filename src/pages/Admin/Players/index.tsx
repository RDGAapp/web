import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as AddSvg } from 'assets/icons/add.svg';
import { ReactComponent as RefreshSvg } from 'assets/icons/refresh.svg';
import { ReactComponent as RenewSvg } from 'assets/icons/renew.svg';
import { ReactComponent as TrashSvg } from 'assets/icons/trash.svg';
import Breadcrumbs from 'components/Breadcrumbs';
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

const Players = () => (
  <>
    <Breadcrumbs />
    <Header>Действия над игроком</Header>
    <Sections>
      <Section to={routes.AdminPlayersCreate}>
        <AddSvg />
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
