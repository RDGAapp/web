import styled, { css } from 'styled-components';
import SocialLink from './SocialLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;

const TextStyle = css`
  margin: 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 14px;
`;

const City = styled.p`
  margin: 0 0 20px;
  ${TextStyle};
`;

const Text = styled.p`
  ${TextStyle};
`;

const Link = styled.a`
  ${TextStyle};
  color: black;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

interface ContactProps {
  city: string,
  phone?: string,
  phone2?: string,
  email: string,
  site?: string,
  instagram?: string,
  telegram?: string,
  vk?: string
}

const Contact = ({
  city, phone, phone2, email, site, instagram, telegram, vk,
}: ContactProps): JSX.Element => (
  <Wrapper>
    <City>
      {city.toUpperCase()}
      :
    </City>
    <Text>{phone}</Text>
    {phone2 ? <Text>{phone2}</Text> : ''}
    <Link href={`mailto:${email}`}>{email.toUpperCase()}</Link>
    {(site) ? <Link href={site}>{site.split('//')[1].toUpperCase()}</Link> : ''}
    <Social>
      {instagram && (<SocialLink name="INSTAGRAM" value={instagram} />)}
      {telegram && (<SocialLink name="TELEGRAM" value={telegram} />)}
      {vk && (<SocialLink name="VK" value={vk} />)}
    </Social>
  </Wrapper>
);

Contact.defaultProps = {
  phone: '',
  phone2: '',
  instagram: '',
  telegram: '',
  vk: '',
  site: '',
};

export default Contact;
