import styled from 'styled-components';
import MainBackground from 'assets/banner-main.png';
import ShopBackground from 'assets/banner-shop.png';
import SponsorBackground from 'assets/banner-sponsor.png';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import ButtonAgitation from 'components/ButtonAgitation';
import routes from 'helpers/routes';

const Wrapper = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 460px;
  margin: 0 20px 60px;
  border-radius: 50px;
  overflow: hidden;
  background: center url(${({ image }) => image});
  padding-bottom: 100px;
`;

const Banner = (): JSX.Element => {
  const history = useHistory();
  const [bannerImage, setBannerImage] = useState<string>('');
  const [bannerText, setBannerText] = useState<string>('');

  useEffect(() => {
    switch (history.location.pathname) {
      case routes.SHOP:
        setBannerImage(ShopBackground);
        setBannerText('Купить');
        break;
      case routes.SPONSORSHIP:
      case routes.COMPANIES:
        setBannerImage(SponsorBackground);
        setBannerText('Заказать мероприятие');
        break;
      default:
        setBannerImage(MainBackground);
        setBannerText('Пройти мастер-класс');
        break;
    }
  }, [history.location.pathname]);

  return (
    <Wrapper image={bannerImage}>
      <ButtonAgitation text={bannerText} />
    </Wrapper>
  );
};

export default Banner;
