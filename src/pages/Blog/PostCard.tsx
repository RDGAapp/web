import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from 'components/Avatar';
import ButtonOutlined from 'components/ButtonOutlined';
import { getDisplayDate } from 'helpers/dateHelpers';
import routes from 'helpers/routes';
import { IPost } from 'types/blog';

const collapsedMaxHeightVh = 50;

const Card = styled.div`
  display: grid;
  gap: 0.8rem;

  padding: 1rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.lighterBackground};

  & > h1,
  & > a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration-color: transparent;
    text-decoration-style: wavy;

    transition: all 0.2s linear;
  }

  & > a:hover,
  & > a:focus-visible {
    text-decoration-color: ${({ theme }) => theme.colors.primary};
  }
`;

const User = styled.div`
  overflow: hidden;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  width: 100%;
  padding: 0.2rem;
`;

const UserText = styled.div`
  overflow: hidden;
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;

  & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Text = styled.div`
  overflow: hidden;
  max-height: ${collapsedMaxHeightVh}vh;

  &[data-expanded='true'] {
    max-height: max-content;
  }

  & * {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  & iframe {
    border: none;
  }

  & img {
    @keyframes placeholder-shimmer {
      0% {
        background-position: -800px 0;
      }

      100% {
        background-position: 800px 0;
      }
    }

    width: auto;
    max-width: 100%;
    height: auto;
    min-height: 20rem;
    max-height: 90vh;

    object-fit: cover;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.skeletonBackground} 8%,
      ${({ theme }) => theme.colors.lighterBackground} 18%,
      ${({ theme }) => theme.colors.skeletonBackground} 33%
    );
    background-color: ${({ theme }) => theme.colors.skeletonBackground};

    animation-name: placeholder-shimmer;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
`;

const DateComponent = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral};
`;

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

export interface IPostCard {
  post: IPost;
  defaultExpanded?: boolean;
  linkedHeader?: boolean;
}

const PostCard = ({
  post,
  defaultExpanded = false,
  linkedHeader = false,
}: IPostCard) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [isSmallPost, setIsSmallPost] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const author = post.author || `${post.authorName} ${post.authorSurname}`;

  return (
    <Card ref={cardRef}>
      {linkedHeader ? (
        <Link to={`${routes.Blog}/${post.code}`} title={post.header}>
          {post.header}
        </Link>
      ) : (
        <h1 title={post.header}>{post.header}</h1>
      )}
      <User>
        <Avatar imageSrc={post.authorAvatarUrl} />
        <UserText>
          <p title={author}>
            <b>{author}</b>
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
        data-expanded={expanded.toString()}
        ref={(node) => {
          if (
            !node ||
            node.scrollHeight >
              (window.innerHeight * collapsedMaxHeightVh) / 100
          ) {
            setIsSmallPost(false);
            return;
          }

          setIsSmallPost(true);
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: post.text }}
          style={{ display: 'grid', gap: '1rem' }}
        />
      </Text>
      {!isSmallPost && !expanded && (
        <Button onClick={() => setExpanded(true)}>...ещё</Button>
      )}
      {!isSmallPost && expanded && !defaultExpanded && (
        <Button
          onClick={() => {
            setExpanded(false);
            cardRef.current?.scrollIntoView({ behavior: 'instant' });
          }}
          style={{ position: 'sticky', bottom: 5 }}
        >
          Свернуть
        </Button>
      )}
    </Card>
  );
};

export default PostCard;
