import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import useDialog from 'hooks/useDialog';
import CreateTournament from 'pages/Admin/AdminPanelSections/CreateTournament';
import DeleteTournament from 'pages/Admin/AdminPanelSections/DeleteTournament';
import Section from 'pages/Admin/AdminPanelSections/Section';
import SubHeader from 'pages/Admin/AdminPanelSections/Subheader';
import UpdateTournament from 'pages/Admin/AdminPanelSections/UpdateTournament';

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

const TournamentsSection = () => {
  const {
    Dialog: CreateTournamentDialog,
    openModal: openCreateTournamentModal,
    closeModal: closeCreateTournamentModal,
  } = useDialog({});

  const {
    Dialog: DeleteTournamentDialog,
    openModal: openDeleteTournamentModal,
    closeModal: closeDeleteTournamentModal,
  } = useDialog({});

  const {
    Dialog: UpdateTournamentDialog,
    openModal: openUpdateTournamentModal,
    closeModal: closeUpdateTournamentModal,
  } = useDialog({});

  return (
    <>
      <Section>
        <SubHeader>Действия с турнирами</SubHeader>
        <Button type='button' onClick={openCreateTournamentModal}>
          Создать турнир
        </Button>
        <Button type='button' onClick={openUpdateTournamentModal}>
          Обновить турнир
        </Button>
        <Button type='button' onClick={openDeleteTournamentModal}>
          Удалить турнир
        </Button>
      </Section>
      <CreateTournamentDialog>
        <CreateTournament onClose={closeCreateTournamentModal} />
      </CreateTournamentDialog>
      <DeleteTournamentDialog>
        <DeleteTournament onClose={closeDeleteTournamentModal} />
      </DeleteTournamentDialog>
      <UpdateTournamentDialog>
        <UpdateTournament onClose={closeUpdateTournamentModal} />
      </UpdateTournamentDialog>
    </>
  );
};

export default TournamentsSection;
