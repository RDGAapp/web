import getApiUrl from 'helpers/getApiUrl';

import { Player } from '../@types/player';

export const getPlayers = (
  pageNumber: number,
  surname?: string,
  town?: Town,
  onlyActive?: boolean,
) => {
  const query = new URLSearchParams();
  query.append('page', pageNumber.toString());
  query.append('surname', surname ?? '');
  query.append('town', town ?? '');
  query.append('onlyActive', (onlyActive ?? true).toString());

  return fetch(getApiUrl(`/players?${query.toString()}`));
};

export const getPlayer = (playerRdgaNumber: number) =>
  fetch(getApiUrl(`/players/${playerRdgaNumber}`));

export const createPlayer = (player: Player) =>
  fetch(getApiUrl('/players'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });

export const deletePlayer = (playerRdgaNumber: number) =>
  fetch(getApiUrl(`/players/${playerRdgaNumber}`), {
    method: 'DELETE',
  });

export const updatePlayer = (
  player: Omit<Player, 'rdgaNumber'>,
  rdgaNumber: number,
) =>
  fetch(getApiUrl(`/players/${rdgaNumber}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });

export const updatePlayerRating = (rdgaNumber: number, newRating: number) =>
  fetch(getApiUrl(`/players/${rdgaNumber}/rdgaRating`), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rating: newRating }),
  });

export const getTournaments = () => fetch(getApiUrl(`/tournaments`));

export const getTournament = (code: string) =>
  fetch(getApiUrl(`/tournaments/${code}`));

export const createTournament = (tournament: Tournament) =>
  fetch(getApiUrl('/tournaments'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tournament),
  });

export const updateTournament = (
  tournament: Omit<Tournament, 'code'>,
  code: string,
) =>
  fetch(getApiUrl(`/tournaments/${code}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tournament),
  });

export const deleteTournament = (tournamentCode: string) =>
  fetch(getApiUrl(`/tournaments/${tournamentCode}`), {
    method: 'DELETE',
  });

export const activatePlayer = (rdgaNumber: number) =>
  fetch(getApiUrl(`/players/${rdgaNumber}/activate`), {
    method: 'PATCH',
  });

export const updatePlayerRatingMultiple = (
  values: { rdgaNumber: number; rating: number }[],
) =>
  fetch(getApiUrl(`/players/rdgaRating/multiple`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
