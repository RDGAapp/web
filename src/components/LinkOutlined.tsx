import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import theme from 'helpers/theme';

const Link = styled(HashLink)<{ hovercolor: string }>`
  ${ButtonOutlined}
  font-weight: 500;
  transition: background-color 0.3s ease, scale 0.2s ease-in-out;

  :hover {
    background-color: ${({ hovercolor }) => hovercolor};
    scale: 1.1;
  }

  :active {
    scale: 0.9
  }
`;

interface ButtonOutlinedProps {
  text: string;
  route: string;
  hoverColor?: string;
  onClick?: () => void;
}

const LinkOutlined = ({
  text,
  route,
  hoverColor = theme.colors.primary,
  onClick,
}: ButtonOutlinedProps): JSX.Element => (
  <Link smooth to={route} hovercolor={hoverColor} onClick={onClick}>
    {text.toUpperCase()}
  </Link>
);

export default LinkOutlined;
