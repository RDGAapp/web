import React from 'react';

import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import CreatePlayer from 'components/Dialogs/AdminPanelSections/CreatePlayer';
import DeletePlayer from 'components/Dialogs/AdminPanelSections/DeletePlayer';
import Section from 'components/Dialogs/AdminPanelSections/Section';
import SubHeader from 'components/Dialogs/AdminPanelSections/Subheader';
import UpdateRating from 'components/Dialogs/AdminPanelSections/UpdateRating';
import useDialog from 'hooks/useDialog';

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

const PlayerSection = () => {
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
  const {
    Dialog: UpdateRatingDialog,
    openModal: openUpdateRatingModal,
    closeModal: closeUpdateRatingModal,
  } = useDialog();

  return (
    <>
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
        <Button type='button' onClick={openUpdateRatingModal}>
          Обновить рейтинг
        </Button>
        <Button type='button' disabled>
          Обновить рейтинг (xlsx)
        </Button>
      </Section>
      <CreatePlayerDialog>
        <CreatePlayer onClose={closeCreatePlayerModal} />
      </CreatePlayerDialog>
      <DeletePlayerDialog>
        <DeletePlayer onClose={closeDeletePlayerModal} />
      </DeletePlayerDialog>
      <UpdateRatingDialog>
        <UpdateRating onClose={closeUpdateRatingModal} />
      </UpdateRatingDialog>
    </>
  );
};

export default PlayerSection;
