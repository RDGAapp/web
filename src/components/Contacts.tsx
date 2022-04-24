import styled from 'styled-components';

import Contact from 'components/Contact';
import contacts from 'helpers/contacts';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 60px;
  justify-content: flex-start;
`;

const Contacts = () => (
  <Container>
    {contacts.map((contact) => (
      <Contact
        key={contact.city}
        phone={contact.phone}
        phone2={contact.phone2}
        email={contact.email}
        city={contact.city}
        site={contact.site}
        telegram={contact.telegram}
        vk={contact.vk}
      />
    ))}
  </Container>
);

export default Contacts;
