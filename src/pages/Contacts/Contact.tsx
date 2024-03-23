import styled, { css } from 'styled-components';

import SocialLink from 'components/SocialLink';
import { IContact } from 'types/contact';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.25rem;
  justify-self: center;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.lighterBackground};
  border-radius: 1rem;

  & > svg {
    align-self: center;

    width: 100%;
    min-width: 5rem;
    max-width: 6rem;
    height: auto;
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: 80vw;
  }
`;

const TextContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
`;

const TextStyle = css`
  overflow: hidden;

  width: 100%;
  max-width: max-content;
  margin: 0;

  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Town = styled.h6`
  margin: 0 0 1rem;
  ${TextStyle};
  font-size: 1.2rem;
  font-weight: bold;
`;

const Text = styled.p`
  ${TextStyle};
`;

const Link = styled.a`
  ${TextStyle};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
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
}: IContact): JSX.Element => (
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
        {vk && <SocialLink name='VK' value={vk} />}
      </Social>
    </TextContainer>
  </Container>
);

export default Contact;
