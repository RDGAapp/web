import MenuItem from 'components/MenuItem';
import styled from 'styled-components';
import routes from 'helpers/routes';
import { useLocation } from 'react-router';

const Wrapper = styled.nav`
  display: grid;
  grid-template-areas: "item1 item2 item3 item4 item5 item6";
  margin: 0 20px;

  ${({ theme }) => theme.breakpoints.mobilexs} {
    margin: 0 16px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-areas:
      "item1 item2 item3"
      "item4 item5 item6";
  }

  ${({ theme }) => theme.breakpoints.mobile} {
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
    additionalRoute: routes.ABOUT,
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
    <Wrapper id="menu">
      {menuItemsList.map((menuItem, index) => (
        <MenuItem
          key={menuItem.name}
          header={menuItem.name}
          description={menuItem.description}
          number={index + 1}
          route={menuItem.route}
          selected={
            location.pathname === menuItem.route
            || location.pathname === menuItem.additionalRoute
          }
        />
      ))}
    </Wrapper>
  );
};

export default Menu;
