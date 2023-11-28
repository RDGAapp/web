import styled from 'styled-components';

import { ReactComponent as LinkSvg } from 'assets/icons/link.svg';

const Link = styled.a`
  display: flex;
  gap: 0.1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & svg {
    height: 0.7rem;
  }
`;

interface SocialLinkProps {
  name: string,
  value: string,
}

const SocialLink = ({ name, value }: SocialLinkProps): JSX.Element => (
  <Link href={value} target="_blank" rel="noreferrer">
    {name}
    <LinkSvg />
  </Link>
);

export default SocialLink;
