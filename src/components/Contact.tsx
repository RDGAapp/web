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

const City = styled.p`
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

interface ContactProps {
  city: string,
  phone?: string,
  phone2?: string,
  email?: string,
  site?: string,
  instagram?: string,
  telegram?: string,
  vk?: string
}

const Contact = ({
  city, phone, phone2, email, site, instagram, telegram, vk,
}: ContactProps): JSX.Element => (
  <Container>
    <City>
      {city.toUpperCase()}
      :
    </City>
    <Text>{phone}</Text>
    {phone2 && <Text>{phone2}</Text>}
    {email && <Link href={`mailto:${email}`}>{email.toUpperCase()}</Link>}
    {site && <Link href={site}>{site.split('//')[1].toUpperCase()}</Link>}
    <Social>
      {instagram && (<SocialLink name="INSTAGRAM" value={instagram} />)}
      {telegram && (<SocialLink name="TELEGRAM" value={telegram} />)}
      {vk && (<SocialLink name="VK" value={vk} />)}
    </Social>
  </Container>
);

Contact.defaultProps = {
  phone: '',
  phone2: '',
  email: '',
  instagram: '',
  telegram: '',
  vk: '',
  site: '',
};

export default Contact;
