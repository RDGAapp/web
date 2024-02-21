import getApiUrl from 'helpers/getApiUrl';

const fetchRdgaApi = (url: string, init?: RequestInit) =>
  fetch(getApiUrl(url), {
    ...init,
    credentials: init?.credentials ?? 'include',
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  });

export default fetchRdgaApi;
