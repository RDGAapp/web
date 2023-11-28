import styled from 'styled-components';

import Breadcrumbs from 'components/Breadcrumbs';
import ButtonOutlined from 'components/ButtonOutlined';
import { Header } from 'components/PageContent';
import useDialog from 'hooks/useDialog';
import CreatePlayer from 'pages/Admin/AdminPanelSections/CreatePlayer';
import DeletePlayer from 'pages/Admin/AdminPanelSections/DeletePlayer';
import Section from 'pages/Admin/AdminPanelSections/Section';
import UpdatePlayer from 'pages/Admin/AdminPanelSections/UpdatePlayer';
import UpdateRating from 'pages/Admin/AdminPanelSections/UpdateRating';
import UpdateRatingJson from 'pages/Admin/AdminPanelSections/UpdateRatingJson';

import ActivatePlayer from './AdminPanelSections/ActivatePlayer';

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

const Players = () => {
  const {
    Dialog: CreatePlayerDialog,
    openModal: openCreatePlayerModal,
    closeModal: closeCreatePlayerModal,
  } = useDialog({});
  const {
    Dialog: DeletePlayerDialog,
    openModal: openDeletePlayerModal,
    closeModal: closeDeletePlayerModal,
  } = useDialog({});
  const {
    Dialog: UpdateRatingDialog,
    openModal: openUpdateRatingModal,
    closeModal: closeUpdateRatingModal,
  } = useDialog({});
  const {
    Dialog: UpdatePlayerDialog,
    openModal: openUpdatePlayerModal,
    closeModal: closeUpdatePlayerModal,
  } = useDialog({});
  const {
    Dialog: UpdateRatingJsonDialog,
    openModal: openUpdateRatingJsonModal,
    closeModal: closeUpdateRatingJsonModal,
  } = useDialog({});
  const {
    Dialog: ActivatePlayerDialog,
    openModal: openActivatePlayerModal,
    closeModal: closeActivatePlayerModal,
  } = useDialog({});

  return (
    <>
      <Breadcrumbs />
      <Header>Действия над игроком</Header>
      <Section>
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
        <Button type='button' onClick={openActivatePlayerModal}>
          Активировать подписку игрока
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
      <ActivatePlayerDialog>
        <ActivatePlayer onClose={closeActivatePlayerModal} />
      </ActivatePlayerDialog>
    </>
  );
};

export default Players;
