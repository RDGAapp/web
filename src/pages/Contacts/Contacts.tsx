import styled from 'styled-components';

import contacts from 'helpers/contacts';

import Contact from './Contact';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
`;

const Contacts = () => (
  <Container>
    {contacts.map((contact) => (
      <Contact
        key={contact.code}
        code={contact.code}
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
