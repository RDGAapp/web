import styled from 'styled-components';

import PlayerSection from 'components/Dialogs/AdminPanelSections/PlayerSection';
import TournamentsSection from 'components/Dialogs/AdminPanelSections/TournamentsSection';

const Sections = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
`;

const AdminPanelSections = () => (
  <Sections>
    <PlayerSection />
    <TournamentsSection />
  </Sections>
);

export default AdminPanelSections;
