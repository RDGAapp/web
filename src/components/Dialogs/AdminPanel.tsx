import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import AdminPanelSections from 'components/Dialogs/AdminPanelSections';

const Header = styled.h1`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps): JSX.Element => (
  <>
    <Header>
      Админ консоль
      <CrossSvg height={17} onClick={onClose} />
    </Header>
    <AdminPanelSections />
  </>
);

export default AdminPanel;
