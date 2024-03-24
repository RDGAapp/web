import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    Number(!!posts.length && searchParams.get('page')) || 0,
  );

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((current) => {
            const newPage = current + 1;
            dispatch(getPosts(newPage));
            return newPage;
          });
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

  useEffect(() => {
    const params: Record<string, string> = {};

    if (page >= 1) {
      params.page = page.toString();
    }

    setSearchParams(params, { replace: true, preventScrollReset: true });
  }, [page]);

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
