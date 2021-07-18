import styled from 'styled-components';
import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Link = styled.a`
  display: flex;
  align-items: center;
  word-break: break-word;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px 15px;
  gap: 15px;
`;

interface OuterLinkProps {
  link: string,
  children?: JSX.Element,
}

const OuterLink = ({ link, children }: OuterLinkProps): JSX.Element => (
  <Link href={`https://${link}`} target="_blank">
    {children}
    {link.toUpperCase()}
    <LinkSvg />
  </Link>
);

OuterLink.defaultProps = {
  children: null,
};

export default OuterLink;
