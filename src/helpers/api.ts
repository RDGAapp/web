import getApiUrl from 'helpers/getApiUrl';
import { IPost } from 'types/blog';
import { IPlayer } from 'types/player';
import { ITournament } from 'types/tournament';
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

  return fetch(getApiUrl(`/players?${query.toString()}`));
};

export const getPlayer = (playerRdgaNumber: number) =>
  fetch(getApiUrl(`/players/${playerRdgaNumber}`));

export const createPlayer = (player: IPlayer) =>
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
  player: Omit<IPlayer, 'rdgaNumber'>,
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

export const createTournament = (tournament: ITournament) =>
  fetch(getApiUrl('/tournaments'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tournament),
  });

export const updateTournament = (
  tournament: Omit<ITournament, 'code'>,
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

export const getPosts = (page: number) => {
  const query = new URLSearchParams();
  query.append('page', page.toString());
  return fetch(getApiUrl(`/posts?${query.toString()}`));
};

export const getPost = (code: string) => fetch(getApiUrl(`/posts/${code}`));

export const createPost = (post: Omit<IPost, 'createdAt'>) =>
  fetch(getApiUrl('/posts'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

export const updatePost = (
  post: Omit<IPost, 'createdAt' | 'code'>,
  code: string,
) =>
  fetch(getApiUrl(`/posts/${code}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

export const deletePost = (tournamentCode: string) =>
  fetch(getApiUrl(`/posts/${tournamentCode}`), {
    method: 'DELETE',
  });
