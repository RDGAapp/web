import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import MainBackground from 'assets/images/banner-main.webp';
import SponsorBackground from 'assets/images/banner-sponsor.webp';
import CalendarImage from 'assets/images/calendar.webp';
import PlayersBackground from 'assets/images/players.webp';
import routes from 'helpers/routes';

const Container = styled.div<{ image: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16/9;
  margin: 0 0 1rem;
  background: center url(${({ image }) => image});
  background-size: cover;
  border-radius: 2.5rem;
`;

const LinkCta = styled(HashLink)`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-bottom: 7%;
  padding: 0.8rem 1.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.border};
  }

  svg {
    height: 1.2rem;
  }
`;

const ArrowDown = styled(ArrowSvg)`
  transform: rotate(90deg);
`;

const bannerContent = new Map<string, Record<string, string>>([
  [
    routes.About,
    { image: PlayersBackground, text: 'Вступить в РДГА', link: routes.Join },
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
      text: 'Вступить в РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Calendar,
    {
      image: CalendarImage,
      text: 'Вступить в РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
]);

const defaultBannerContent = {
  image: MainBackground,
  text: 'Пройти мастер-класс',
  link: `${routes.Master}${routes.Menu}`,
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
    <Container image={image}>
      <LinkCta to={link} smooth>
        <ArrowDown />
        {text.toUpperCase()}
      </LinkCta>
    </Container>
  );
};

export default Banner;
