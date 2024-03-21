import fetchRdgaApi from 'helpers/fetchRdgaApi';
import { IPostBase } from 'types/blog';

export const getPosts = (page: number, from?: string) => {
  const query = new URLSearchParams();
  query.append('page', page.toString());
  if (from) {
    query.append('from', from);
  }
  return fetchRdgaApi(`/posts?${query.toString()}`);
};

export const getPost = (code: string) => fetchRdgaApi(`/posts/${code}`);

export const createPost = (post: Omit<IPostBase, 'createdAt'>) =>
  fetchRdgaApi('/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  });

export const updatePost = (
  post: Omit<IPostBase, 'createdAt' | 'code'>,
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
