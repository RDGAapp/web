import styled from 'styled-components';
import MainBackground from 'assets/banner-main.png';
import ShopBackground from 'assets/banner-shop.png';
import SponsorBackground from 'assets/banner-sponsor.png';
import { useLocation } from 'react-router';
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

  ${({ theme }) => theme.breakpoints.mobilexs} {
    margin: 0 16px 60px;
  }
`;

const Banner = (): JSX.Element => {
  const location = useLocation();
  const [image, setImage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    switch (location.pathname) {
      case routes.SHOP:
        setImage(ShopBackground);
        setText('Купить');
        setLink(`${routes.SHOP_FORM}`);
        break;
      case routes.SPONSORSHIP:
        setImage(SponsorBackground);
        setText('Сделать пожертвование');
        setLink(`${routes.SPONSOR}`);
        break;
      case routes.COMPANIES:
        setImage(SponsorBackground);
        setText('Заказать мероприятие');
        setLink(`${routes.CONTACTS}`);
        break;
      default:
        setImage(MainBackground);
        setText('Пройти мастер-класс');
        setLink(`${routes.MASTER}${routes.MENU}`);
        break;
    }
  }, [location.pathname]);

  return (
    <Wrapper image={image}>
      <ButtonAgitation text={text} link={link} />
    </Wrapper>
  );
};

export default Banner;
