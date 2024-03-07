import fetchRdgaApi from 'helpers/fetchRdgaApi';
import { ITournament } from 'types/tournament';

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
