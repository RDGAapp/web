import styled, { css } from 'styled-components';

import SocialLink from 'components/SocialLink';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.25rem;
  justify-self: center;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;

  & > svg {
    align-self: center;
    width: 100%;
    min-width: 5rem;
    height: auto;
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: 80vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

const TextStyle = css`
  width: 100%;
  margin: 0;
  overflow: hidden;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Town = styled.h6`
  margin: 0 0 1rem;

  ${TextStyle};
  font-weight: bold;
  font-size: 1.2rem;
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
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const Contact = ({
  town,
  phone,
  phone2 = '',
  email,
  site = '',
  instagram = '',
  telegram,
  vk,
  Image,
}: Contact): JSX.Element => (
  <Container>
    <Image />
    <TextContainer>
      <Town>{town}:</Town>
      <Text>{phone}</Text>
      {phone2 && <Text>{phone2}</Text>}
      <Link href={`mailto:${email}`}>{email.toUpperCase()}</Link>
      {site && <Link href={site}>{site.split('//')[1].toUpperCase()}</Link>}
      <Social>
        {instagram && <SocialLink name='INSTAGRAM' value={instagram} />}
        <SocialLink name='TELEGRAM' value={telegram} />
        <SocialLink name='VK' value={vk} />
      </Social>
    </TextContainer>
  </Container>
);

export default Contact;
