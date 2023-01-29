import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import CreatePlayer from 'components/Dialogs/AdminPanelSections/CreatePlayer';
import DeletePlayer from 'components/Dialogs/AdminPanelSections/DeletePlayer';
import Section from 'components/Dialogs/AdminPanelSections/Section';
import SubHeader from 'components/Dialogs/AdminPanelSections/Subheader';
import UpdatePlayer from 'components/Dialogs/AdminPanelSections/UpdatePlayer';
import UpdateRating from 'components/Dialogs/AdminPanelSections/UpdateRating';
import UpdateRatingJson from 'components/Dialogs/AdminPanelSections/UpdateRatingJson';
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
  const {
    Dialog: UpdatePlayerDialog,
    openModal: openUpdatePlayerModal,
    closeModal: closeUpdatePlayerModal,
  } = useDialog();
  const {
    Dialog: UpdateRatingJsonDialog,
    openModal: openUpdateRatingJsonModal,
    closeModal: closeUpdateRatingJsonModal,
  } = useDialog();

  return (
    <>
      <Section>
        <SubHeader>Действия с игроками</SubHeader>
        <Button type='button' onClick={openCreatePlayerModal}>
          Создать игрока
        </Button>
        <Button type='button' onClick={openUpdatePlayerModal}>
          Обновить игрока
        </Button>
        <Button type='button' onClick={openDeletePlayerModal}>
          Удалить игрока
        </Button>
        <Button type='button' onClick={openUpdateRatingModal}>
          Обновить рейтинг
        </Button>
        <Button type='button' onClick={openUpdateRatingJsonModal}>
          Обновить рейтинг (json)
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
      <UpdatePlayerDialog>
        <UpdatePlayer onClose={closeUpdatePlayerModal} />
      </UpdatePlayerDialog>
      <UpdateRatingJsonDialog>
        <UpdateRatingJson onClose={closeUpdateRatingJsonModal} />
      </UpdateRatingJsonDialog>
    </>
  );
};

export default PlayerSection;
