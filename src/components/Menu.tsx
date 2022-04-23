import { useLocation } from 'react-router';
import styled from 'styled-components';

import MenuItem from 'components/MenuItem';
import routes from 'helpers/routes';

const Container = styled.nav`
  display: grid;
  grid-template-areas: "item1 item2 item3 item4 item5 item6";

  ${({ theme }) => theme.media.tablet} {
    grid-template-areas:
      "item1 item2 item3"
      "item4 item5 item6";
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-areas:
      "item1 item2"
      "item3 item4"
      "item5 item6";
  }
`;

const menuItemsList = [
  {
    name: 'Диск-гольф',
    description: 'Узнать подробнее о спорте и правилах',
    route: routes.HOME,
  },
  {
    name: 'Мастер-класс',
    description: 'Попробовать и полюбить',
    route: routes.MASTER,
  },
  {
    name: 'Потренироваться',
    description: 'Играть самому и с друзьями',
    route: routes.TRAINING,
  },
  {
    name: 'Начинающий',
    description: 'Участвовать в турнирах!',
    route: routes.NEWBIE,
  },
  {
    name: 'Профессионал',
    description: 'Соревнуйся с профи!',
    route: routes.PRO,
  },
  {
    name: 'Международный',
    description: 'Играй за границей!',
    route: routes.INTERNATIONAL,
  },
];

const Menu = (): JSX.Element => {
  const location = useLocation();

  return (
    <Container id="menu">
      {menuItemsList.map((menuItem, index) => (
        <MenuItem
          key={menuItem.name}
          header={menuItem.name}
          description={menuItem.description}
          number={index + 1}
          route={menuItem.route}
          selected={location.pathname === menuItem.route}
        />
      ))}
    </Container>
  );
};

export default Menu;
