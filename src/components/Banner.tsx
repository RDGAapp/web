import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import MainBackground from 'assets/banner-main.png';
import ShopBackground from 'assets/banner-shop.png';
import SponsorBackground from 'assets/banner-sponsor.png';
import PlayersBackground from 'assets/players.jpg';
import routes from 'helpers/routes';

const Container = styled.div<{ image: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 28rem;
  margin: 0 0 3rem;
  padding-bottom: 5rem;
  background: center url(${({ image }) => image});
  border-radius: 2.5rem;
`;

const LinkCta = styled(HashLink)`
  display: flex;
  gap: 0.7rem;
  align-items: center;
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

const bannerContent = new Map<string, Record<string, string>>([
  [routes.SHOP, { image: ShopBackground, text: 'Купить', link: routes.CONTACTS }],
  [routes.SPONSORSHIP, { image: SponsorBackground, text: 'Сделать пожертвование', link: routes.SPONSOR }],
  [routes.COMPANIES, { image: SponsorBackground, text: 'Заказать мероприятие', link: routes.CONTACTS }],
  [routes.PLAYERS, { image: PlayersBackground, text: 'Пройти мастер-класс', link: `${routes.MASTER}${routes.MENU}` }],
]);

const defaultBannerContent = { image: MainBackground, text: 'Пройти мастер-класс', link: `${routes.MASTER}${routes.MENU}` };

const Banner = (): JSX.Element => {
  const location = useLocation();
  const [image, setImage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    const currentBannerContent = bannerContent.get(location.pathname) || defaultBannerContent;
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
