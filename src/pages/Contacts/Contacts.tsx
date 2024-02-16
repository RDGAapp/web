import styled from 'styled-components';

import contacts from 'helpers/contacts';

import Contact from './Contact';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.media.smallMobile} {
    grid-template-columns: 1fr;
  }
`;

const Contacts = () => (
  <Container>
    {contacts.map((contact) => (
      <Contact
        key={contact.town}
        Image={contact.Image}
        phone={contact.phone}
        phone2={contact.phone2}
        email={contact.email}
        town={contact.town}
        site={contact.site}
        telegram={contact.telegram}
        vk={contact.vk}
      />
    ))}
  </Container>
);

export default Contacts;
