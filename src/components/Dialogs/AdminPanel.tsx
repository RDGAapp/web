import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import ButtonOutlined from 'components/ButtonOutlined';
import CreatePlayer from 'components/Dialogs/CreatePlayer';
import DeletePlayer from 'components/Dialogs/DeletePlayer';
import useDialog from 'hooks/useDialog';

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

const Sections = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

const SubHeader = styled.h5`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
`;

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps): JSX.Element => {
  const {
    Dialog: CreatePlayerDialog,
    openModal: openCreatePlayerModal,
    closeModal: closeCreatePlayerModal,
  } = useDialog();
  const {
    Dialog: DeletePlayerDialog,
    openModal: openDeletePlayerModal,
    closeModal: closeDeletePlayerModal,
  } = useDialog();

  return (
    <>
      <Header>
        Админ консоль
        <CrossSvg height={17} onClick={onClose} />
      </Header>
      <Sections>
        <Section>
          <SubHeader>Действия с игроками</SubHeader>
          <Button type='button' onClick={openCreatePlayerModal}>
            Создать игрока
          </Button>
          <Button type='button' disabled>
            Обновить игрока
          </Button>
          <Button type='button' onClick={openDeletePlayerModal}>
            Удалить игрока
          </Button>
          <Button type='button' disabled>
            Обновить рейтинг
          </Button>
        </Section>
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
        <CreatePlayerDialog>
          <CreatePlayer onClose={closeCreatePlayerModal} />
        </CreatePlayerDialog>
        <DeletePlayerDialog>
          <DeletePlayer onClose={closeDeletePlayerModal} />
        </DeletePlayerDialog>
      </Sections>
    </>
  );
};

export default AdminPanel;
