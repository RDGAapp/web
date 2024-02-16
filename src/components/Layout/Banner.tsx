import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import SponsorBackground from 'assets/images/banner-sponsor.webp';
import MainBackground from 'assets/images/neutral-rdga.webp';
import PlayersBackground from 'assets/images/players.webp';
import routes from 'helpers/routes';

const Container = styled.div<{ $image: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  aspect-ratio: 16/9;
  width: 100%;
  max-height: 28rem;
  margin: 0 0 1rem;

  background: center url('${({ $image }) => $image}');
  background-size: cover;
  border-radius: 2.5rem;
`;

const LinkCta = styled(HashLink)`
  cursor: pointer;

  display: flex;
  gap: 0.7rem;
  align-items: center;

  margin-bottom: 7%;
  padding: 0.8rem 1.2rem;

  font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;

  transition: scale 0.2s ease;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }

  & svg {
    height: 1rem;
  }
`;

const bannerContent = new Map<string, Record<string, string>>([
  [
    routes.About,
    {
      image: PlayersBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Service,
    {
      image: SponsorBackground,
      text: 'Заказать мероприятие',
      link: routes.Contacts,
    },
  ],
  [
    routes.Players,
    {
      image: PlayersBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Calendar,
    {
      image: SponsorBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Partners,
    {
      image: SponsorBackground,
      text: 'Поддержать РДГА',
      link: 'https://www.tinkoff.ru/cf/9mJN821ed7D',
    },
  ],
]);

const defaultBannerContent = {
  image: MainBackground,
  text: 'Вступить в клуб РДГА',
  link: `${routes.About}${routes.Join}`,
};

const Banner = (): JSX.Element => {
  const location = useLocation();
  const [image, setImage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    const currentBannerContent =
      bannerContent.get(location.pathname) || defaultBannerContent;
    setImage(currentBannerContent.image);
    setText(currentBannerContent.text);
    setLink(currentBannerContent.link);
  }, [location.pathname]);

  return (
    <Container $image={image}>
      <LinkCta
        to={link}
        smooth
        rel={link.startsWith('/') ? '' : 'noreferrer'}
        target={link.startsWith('/') ? '' : '_blank'}
      >
        {text}
      </LinkCta>
    </Container>
  );
};

export default Banner;
