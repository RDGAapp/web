import { useState } from 'react';

import { sanitize } from 'dompurify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from 'components/Avatar';
import ButtonUnderlined from 'components/ButtonUnderlined';
import { getDisplayDate } from 'helpers/dateHelpers';
import routes from 'helpers/routes';

import { Post } from '../../@types/blog';

const Card = styled.div`
  display: grid;
  gap: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  border-radius: 0.5rem;

  & > h1,
  & > a {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    text-overflow: ellipsis;
  }

  & > a:hover {
    text-decoration: underline;
  }
`;

const User = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const UserText = styled.div`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: 200px;
  overflow: hidden;

  &[data-expanded='true'] {
    grid-template-rows: auto;
  }
`;

const DateComponent = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral};
`;

export interface IPostCard {
  post: Post;
  defaultExpanded?: boolean;
  linkedHeader?: boolean;
}

const PostCard = ({
  post,
  defaultExpanded = false,
  linkedHeader = false,
}: IPostCard) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Card>
      {linkedHeader ? (
        <Link to={`${routes.Blog}/${post.code}`} title={post.header}>
          {post.header}
        </Link>
      ) : (
        <h1 title={post.header}>{post.header}</h1>
      )}
      <User>
        <Avatar />
        <UserText>
          <p title={post.author}>
            <b>{post.author}</b>
          </p>
          <DateComponent
            title={new Date(post.createdAt).toLocaleString(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            })}
          >
            <i>{getDisplayDate(new Date(post.createdAt))}</i>
          </DateComponent>
        </UserText>
      </User>
      <Text
        data-expanded={expanded}
        ref={(node) => {
          if ((node?.scrollHeight ?? 0) > 200) return;

          setExpanded(true);
        }}
      >
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: sanitize(post.text) }}
          style={{ display: 'grid', gap: '1rem' }}
        />
      </Text>
      {!expanded && (
        <ButtonUnderlined onClick={() => setExpanded(true)}>
          Развернуть
        </ButtonUnderlined>
      )}
    </Card>
  );
};

export default PostCard;
