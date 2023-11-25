import styled from 'styled-components';

import PlayerSection from 'pages/Admin/AdminPanelSections/PlayerSection';
import TournamentsSection from 'pages/Admin/AdminPanelSections/TournamentsSection';

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
