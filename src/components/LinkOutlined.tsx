import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';

const Link = styled(HashLink)<{ $active: boolean }>`
  ${ButtonOutlined}
  font-weight: 500;
  ${({ $active, theme }) => $active && `background-color: ${theme.colors.primary};`}
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface ButtonOutlinedProps {
  text: string,
  route: string,
}

const LinkOutlined = ({ text, route }: ButtonOutlinedProps): JSX.Element => {
  const location = useLocation();

  return (
    <Link smooth to={route} $active={location.pathname === route || false}>
      {text.toUpperCase()}
    </Link>
  );
};

export default LinkOutlined;
