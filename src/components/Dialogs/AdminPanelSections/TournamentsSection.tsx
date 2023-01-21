import React from 'react';

import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import DeleteTournament from 'components/Dialogs/AdminPanelSections//DeleteTournament';
import CreateTournament from 'components/Dialogs/AdminPanelSections/CreateTournament';
import Section from 'components/Dialogs/AdminPanelSections/Section';
import SubHeader from 'components/Dialogs/AdminPanelSections/Subheader';
import useDialog from 'hooks/useDialog';

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

const TournamentsSection = () => {
  const {
    Dialog: CreateTournamentDialog,
    openModal: openCreateTournamentModal,
    closeModal: closeCreateTournamentModal,
  } = useDialog();

  const {
    Dialog: DeleteTournamentDialog,
    openModal: openDeleteTournamentModal,
    closeModal: closeDeleteTournamentModal,
  } = useDialog();

  return (
    <>
      <Section>
        <SubHeader>Действия с турнирами</SubHeader>
        <Button type='button' onClick={openCreateTournamentModal}>
          Создать турнир
        </Button>
        <Button type='button' disabled>
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
    </>
  );
};

export default TournamentsSection;
