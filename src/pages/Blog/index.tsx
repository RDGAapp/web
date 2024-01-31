import { useEffect, useRef, useState } from 'react';

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

  const { posts, loading, lastPage } = useAppSelector((state) => state.posts);

  const [page, setPage] = useState(0);

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getPosts(page + 1));
          setPage((current) => current + 1);
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <Container>
      <PageHeader text='Блог' />
      {posts.map((post) => (
        <PostCard key={post.code} post={post} linkedHeader />
      ))}
      {!loading && posts.length === 0 && <h4>Пока что здесь ничего нет</h4>}
      {loading && <LogoLoader />}
      {page !== lastPage && <div ref={observerTarget} />}
    </Container>
  );
};

export default Blog;
