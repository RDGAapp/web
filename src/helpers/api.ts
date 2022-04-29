import getApiUrl from 'helpers/getApiUrl';

const getPlayers = (pageNumber: number) => fetch(getApiUrl(`/players?page=${pageNumber}`));

const getPlayer = (playerRdgaNumber: number) => fetch(getApiUrl(`/players/${playerRdgaNumber}`));

export default {
  getPlayers,
  getPlayer,
};
