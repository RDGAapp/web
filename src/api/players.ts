import fetchRdgaApi from 'helpers/fetchRdgaApi';
import { IBasePlayer } from 'types/player';
import { TTown } from 'types/town';

export const getPlayers = (
  pageNumber: number,
  surname?: string,
  town?: TTown,
  onlyActive?: boolean,
) => {
  const query = new URLSearchParams();
  query.append('page', pageNumber.toString());
  query.append('surname', surname ?? '');
  query.append('town', town ?? '');
  query.append('onlyActive', (onlyActive ?? true).toString());

  return fetchRdgaApi(`/players?${query.toString()}`);
};

export const getPlayer = (playerRdgaNumber: number) =>
  fetchRdgaApi(`/players/${playerRdgaNumber}`);

export const createPlayer = (player: IBasePlayer) =>
  fetchRdgaApi('/players', {
    method: 'POST',
    body: JSON.stringify(player),
  });

export const deletePlayer = (playerRdgaNumber: number) =>
  fetchRdgaApi(`/players/${playerRdgaNumber}`, {
    method: 'DELETE',
  });

export const updatePlayer = (
  player: Omit<IBasePlayer, 'rdgaNumber'>,
  rdgaNumber: number,
) =>
  fetchRdgaApi(`/players/${rdgaNumber}`, {
    method: 'PUT',
    body: JSON.stringify(player),
  });

export const updatePlayerRating = (rdgaNumber: number, newRating: number) =>
  fetchRdgaApi(`/players/${rdgaNumber}/rdgaRating`, {
    method: 'PATCH',
    body: JSON.stringify({ rating: newRating }),
  });

  export const activatePlayer = (rdgaNumber: number) =>
  fetchRdgaApi(`/players/${rdgaNumber}/activate`, {
    method: 'PATCH',
  });

export const updatePlayerRatingMultiple = (
  values: { rdgaNumber: number; rating: number }[],
) =>
  fetchRdgaApi('/players/rdgaRating/multiple', {
    method: 'PUT',
    body: JSON.stringify(values),
  });
