import { useEffect } from 'react';

import styled from 'styled-components';

import LogoLoader from 'components/LogoLoader';
import PageHeader from 'components/PageHeader';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPosts } from 'store/posts/thunk';

import PostCard from './PostCard';

const Container = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 40rem;
  margin: auto;
`;

const Blog = () => {
  const dispatch = useAppDispatch();

  const { posts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container>
      <PageHeader text='Блог' />
      {posts.map((post) => (
        <PostCard key={post.code} post={post} />
      ))}
      {posts.length === 0 && <h4>Пока что здесь ничего нет</h4>}
      {loading && <LogoLoader />}
    </Container>
  );
};

export default Blog;
