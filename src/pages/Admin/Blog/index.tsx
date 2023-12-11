import { ReactComponent as PlusSvg } from 'assets/icons/plus.svg';
import { ReactComponent as RefreshSvg } from 'assets/icons/refresh.svg';
import { ReactComponent as TrashSvg } from 'assets/icons/trash.svg';
import Breadcrumbs from 'components/Breadcrumbs';
import { Header } from 'components/PageContent';
import routes from 'helpers/routes';

import Section from '../common/Section';
import Sections from '../common/Sections';

const Players = () => (
  <>
    <Breadcrumbs />
    <Header>Действия над постами</Header>
    <Sections>
      <Section to={routes.AdminBlogCreate}>
        <PlusSvg />
        Создать
      </Section>
      <Section to={routes.AdminBlogUpdate}>
        <RefreshSvg />
        Обновить
      </Section>
      <Section to={routes.AdminBlogDelete}>
        <TrashSvg />
        Удалить
      </Section>
    </Sections>
  </>
);

export default Players;
