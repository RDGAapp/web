import styled from 'styled-components';

import { ReactComponent as LinkSvg } from 'assets/icons/link.svg';

const Link = styled.a`
  display: flex;
  gap: 0.1rem;

  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.primary};

  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & svg {
    height: 0.7rem;
  }
`;

interface SocialLinkProps {
  name: string;
  value: string;
}

const SocialLink = ({ name, value }: SocialLinkProps): JSX.Element => (
  <Link href={value} target='_blank' rel='noreferrer'>
    {name}
    <LinkSvg />
  </Link>
);

export default SocialLink;
