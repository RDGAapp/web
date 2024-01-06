import { useEffect } from 'react';

import { useParams } from 'react-router';
import styled from 'styled-components';

import LogoLoader from 'components/LogoLoader';
import PostCard from 'pages/Blog/PostCard';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPost } from 'store/posts/thunk';

const Container = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 40rem;
  margin: auto;
`;

const BlogPost = () => {
  const dispatch = useAppDispatch();

  const {
    postLoading: loading,
    postError: error,
    currentPost: post,
  } = useAppSelector((state) => state.posts);

  const params = useParams();

  const { postCode } = params;

  useEffect(() => {
    if (!postCode) return;

    dispatch(getPost(postCode));
  }, [postCode]);

  return (
    <Container>
      {post && <PostCard post={post} defaultExpanded />}
      {loading && <LogoLoader />}
      {error && <h4>{error}</h4>}
    </Container>
  );
};

export default BlogPost;
