import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import theme from 'helpers/theme';

const Link = styled(HashLink)<{ $active: boolean; hovercolor: string }>`
  ${ButtonOutlined}
  font-weight: 500;
  ${({ $active, theme }) => $active && `background-color: ${theme.colors.primary};`}
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ hovercolor }) => hovercolor};
  }
`;

interface ButtonOutlinedProps {
  text: string,
  route: string,
  hoverColor?: string,
}

const LinkOutlined = ({
  text,
  route,
  hoverColor = theme.colors.primary,
}: ButtonOutlinedProps): JSX.Element => {
  const location = useLocation();

  return (
    <Link smooth to={route} $active={location.pathname === route || false} hovercolor={hoverColor}>
      {text.toUpperCase()}
    </Link>
  );
};

export default LinkOutlined;
