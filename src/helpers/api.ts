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
