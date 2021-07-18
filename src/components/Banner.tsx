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
  const [image, setImage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    switch (history.location.pathname) {
      case routes.SHOP:
        setImage(ShopBackground);
        setText('Купить');
        setLink(`${routes.SHOP_FORM}`);
        break;
      case routes.SPONSORSHIP:
        setImage(SponsorBackground);
        setText('Сделать пожертвование');
        setLink(`${routes.CHARITY}`);
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
  }, [history.location.pathname]);

  return (
    <Wrapper image={image}>
      <ButtonAgitation text={text} link={link} />
    </Wrapper>
  );
};

export default Banner;
