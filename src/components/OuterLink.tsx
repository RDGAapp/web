import styled from 'styled-components';

import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Link = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  word-break: break-word;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface OuterLinkProps {
  link: string,
  children?: JSX.Element,
}

const OuterLink = ({ link, children }: OuterLinkProps): JSX.Element => (
  <Link href={`https://${link}`} target="_blank">
    {children}
    {link.toUpperCase()}
    <LinkSvg height={20} />
  </Link>
);

OuterLink.defaultProps = {
  children: null,
};

export default OuterLink;
