import styled from 'styled-components';
import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Link = styled.a`
  margin: 0 0 8px;
  color: black;
  font-weight: 400;
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 14px;
`;

const LinkIcon = styled(LinkSvg)`
  margin: 0 15px 0 10px;
`;

interface SocialLinkProps {
  name: string,
  value: string,
}

const SocialLink = ({ name, value }: SocialLinkProps): JSX.Element => (
  <>
    <Link href={value} target="_blank">{name}</Link>
    <LinkIcon width={13} height={13} />
  </>
);

export default SocialLink;
