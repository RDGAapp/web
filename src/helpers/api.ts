import getApiUrl from 'helpers/getApiUrl';

export const getPlayers = (pageNumber: number, surname?: string, town?: Town) =>
  fetch(
    getApiUrl(
      `/players?page=${pageNumber}&surname=${surname ?? ''}&town=${
        town?.replace(' ', '%20') ?? ''
      }`
    )
  );

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
  rdgaNumber: number
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

export const createTournament = (tournament: Tournament) =>
  fetch(getApiUrl('/tournaments'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tournament),
  });

  export const deleteTournament = (tournamentCode: string) =>
    fetch(getApiUrl(`/tournaments/${tournamentCode}`), {
      method: 'DELETE',
    });
