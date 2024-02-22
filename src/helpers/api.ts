import { toast } from 'react-toastify';

import fetchRdgaApi from 'helpers/fetchRdgaApi';
import { IPost } from 'types/blog';
import { IPlayer } from 'types/player';
import { ITelegramResponse } from 'types/telegram';
import { ITournament } from 'types/tournament';
import { TTown } from 'types/town';
import { IUserBaseInfo } from 'types/user';

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

export const createPlayer = (player: IPlayer) =>
  fetchRdgaApi('/players', {
    method: 'POST',
    body: JSON.stringify(player),
  });

export const deletePlayer = (playerRdgaNumber: number) =>
  fetchRdgaApi(`/players/${playerRdgaNumber}`, {
    method: 'DELETE',
  });

export const updatePlayer = (
  player: Omit<IPlayer, 'rdgaNumber'>,
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

export const getTournaments = () => fetchRdgaApi('/tournaments');

export const getTournament = (code: string) =>
  fetchRdgaApi(`/tournaments/${code}`);

export const createTournament = (tournament: ITournament) =>
  fetchRdgaApi('/tournaments', {
    method: 'POST',
    body: JSON.stringify(tournament),
  });

export const updateTournament = (
  tournament: Omit<ITournament, 'code'>,
  code: string,
) =>
  fetchRdgaApi(`/tournaments/${code}`, {
    method: 'PUT',
    body: JSON.stringify(tournament),
  });

export const deleteTournament = (tournamentCode: string) =>
  fetchRdgaApi(`/tournaments/${tournamentCode}`, {
    method: 'DELETE',
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

export const getPosts = (page: number) => {
  const query = new URLSearchParams();
  query.append('page', page.toString());
  return fetchRdgaApi(`/posts?${query.toString()}`);
};

export const getPost = (code: string) => fetchRdgaApi(`/posts/${code}`);

export const createPost = (post: Omit<IPost, 'createdAt'>) =>
  fetchRdgaApi('/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  });

export const updatePost = (
  post: Omit<IPost, 'createdAt' | 'code'>,
  code: string,
) =>
  fetchRdgaApi(`/posts/${code}`, {
    method: 'PUT',
    body: JSON.stringify(post),
  });

export const deletePost = (tournamentCode: string) =>
  fetchRdgaApi(`/posts/${tournamentCode}`, {
    method: 'DELETE',
  });

export const login = async (telegramData: ITelegramResponse) => {
  const response = await fetchRdgaApi('/authorization/login', {
    method: 'POST',
    body: JSON.stringify(telegramData),
  });

  if (response.status === 200) {
    return (await response.json()) as IUserBaseInfo;
  }

  if (response.status === 404) {
    return null;
  }

  const text = await response.text();
  console.error('Что-то пошло не так: ', text);
  toast.error('Что-то пошло не так, повторите позже');
  return null;
};

export const logout = async () => fetchRdgaApi('/authorization/logout');

export const register = async (
  rdgaNumber: number,
  telegramData: ITelegramResponse,
) => {
  const response = await fetchRdgaApi('/authorization/register', {
    method: 'POST',
    body: JSON.stringify({ ...telegramData, rdgaNumber }),
  });

  if (response.status !== 200) {
    const text = await response.text();
    toast.error(`Что-то пошло не так: ${text}`);
    return null;
  }

  return (await response.json()) as IUserBaseInfo;
};

export const authorize = async () => {
  const response = await fetchRdgaApi('/authorization/authorize');
  if (response.status !== 200) return null;

  return (await response.json()) as IUserBaseInfo;
};
