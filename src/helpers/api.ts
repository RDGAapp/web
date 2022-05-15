import getApiUrl from 'helpers/getApiUrl';

const getPlayers = (pageNumber: number, surname?: string, town?: Town) => fetch(
  getApiUrl(
    `/players?page=${pageNumber}&surname=${surname ?? ''}&town=${town?.replace(' ', '%20') ?? ''}`,
  ),
);

const getPlayer = (playerRdgaNumber: number) => fetch(getApiUrl(`/players/${playerRdgaNumber}`));

export default {
  getPlayers,
  getPlayer,
};
