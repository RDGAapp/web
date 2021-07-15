import styled from 'styled-components';
import ShopBackground from 'assets/banner-shop.png';
import ButtonAgitation from './ButtonAgitation';
// import SponsorBackground from 'assets/banner-sponsor.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 460px;
  margin: 0 20px 60px;
  border-radius: 50px;
  overflow: hidden;
  background: center url(${ShopBackground});
  padding-bottom: 100px;
`;

const Banner = (): JSX.Element => (
  <Wrapper>
    <ButtonAgitation text="Пройти мастер-класс" />
  </Wrapper>
);

export default Banner;
