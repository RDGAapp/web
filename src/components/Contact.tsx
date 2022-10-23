import styled, { css } from 'styled-components';

import SocialLink from 'components/SocialLink';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  max-width: max-content;
`;

const TextStyle = css`
  margin: 0 0 0.4rem;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1;
`;

const Town = styled.p`
  margin: 0 0 1rem;
  ${TextStyle};
`;

const Text = styled.p`
  ${TextStyle};
`;

const Link = styled.a`
  ${TextStyle};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Social = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const Contact = ({
  town, phone, phone2 = '', email, site = '', instagram = '', telegram, vk,
}: Contact): JSX.Element => (
  <Container>
    <Town>
      {town.toUpperCase()}
      :
    </Town>
    <Text>{phone}</Text>
    {phone2 && <Text>{phone2}</Text>}
    <Link href={`mailto:${email}`}>{email.toUpperCase()}</Link>
    {site && <Link href={site}>{site.split('//')[1].toUpperCase()}</Link>}
    <Social>
      {instagram && (<SocialLink name="INSTAGRAM" value={instagram} />)}
      <SocialLink name="TELEGRAM" value={telegram} />
      <SocialLink name="VK" value={vk} />
    </Social>
  </Container>
);

export default Contact;
