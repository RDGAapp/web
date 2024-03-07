import { toast } from 'react-toastify';

import fetchRdgaApi from 'helpers/fetchRdgaApi';
import { ITelegramResponse } from 'types/telegram';
import { IUserBaseInfo } from 'types/user';

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
  console.error('Something went wrong: ', text);
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
    console.error('Something went wrong:', text);
    toast.error('Регистрация не завершилась успехом');
    return null;
  }

  return (await response.json()) as IUserBaseInfo;
};

export const authorize = async () => {
  const response = await fetchRdgaApi('/authorization/authorize');
  if (response.status !== 200) return null;

  return (await response.json()) as IUserBaseInfo;
};
