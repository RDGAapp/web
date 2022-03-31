import styled from 'styled-components';
import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Link = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px 15px;
  color: black;
  font-weight: 300;
  font-size: 24px;
  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: 24px;
  text-decoration: none;
  word-break: break-word;
  border: 1px solid black;
  border-radius: 30px;
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
