import React from 'react';

import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import Section from 'components/Dialogs/AdminPanelSections/Section';
import SubHeader from 'components/Dialogs/AdminPanelSections/Subheader';

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

const TournamentsSection = () => (
  <Section>
    <SubHeader>Действия с турнирами</SubHeader>
    <Button type='button' disabled>
      Создать турнир
    </Button>
    <Button type='button' disabled>
      Обновить турнир
    </Button>
    <Button type='button' disabled>
      Удалить турнир
    </Button>
  </Section>
);

export default TournamentsSection;
