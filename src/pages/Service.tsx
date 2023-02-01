import styled from 'styled-components';

import DiscsShopImg from 'assets/images/service1.webp';
import ServiceImg from 'assets/images/service2.webp';

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
  padding: 1rem;
`;
const Row = styled.div<{ imagePosition: 'left' | 'right' }>`
  display: grid;
  ${({ imagePosition }) =>
    imagePosition === 'left'
      ? "grid-template-areas: 'picture description'"
      : "grid-template-areas: 'description picture'"};
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-areas: 'picture' 'description';
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;
  gap: 0.8rem;
  align-self: flex-start;
  width: 90%;
  margin: auto;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5rem;

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }

  li::marker {
    content: ' 🥏 ';
  }

  ul {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  grid-area: picture;
  width: 65%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
`;

const CustomImage = styled.img<{ position: 'left' | 'right' }>`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  aspect-ratio: 1;
  rotate: ${({ position }) => (position === 'left' ? '5deg' : '-5deg')};
  transition: rotate 0.3s ease-in-out;

  :hover {
    rotate: 0deg;
  }
`;

const Header = styled.h3`
  font-weight: 400;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

const Service = (): JSX.Element => (
  <PageContainer>
    <Row imagePosition='left'>
      <ImageContainer>
        <CustomImage src={DiscsShopImg} position='left' />
      </ImageContainer>
      <TextContainer>
        <Header>Диски для точных попаданий и невероятных траекторий!</Header>
        <p>
          Возможно твой первый диск был куплен в спорттоварах или найден на
          антрисолях, в лучшем случае это диск из Декатлона. Начало положено и
          пора задуматься над приобретением диска, который будет следовать твоим
          желаниям и лететь куда ты хочешь.
          {'\n'}
          Диски ты легко сможешь заказать через интернет либо купить пощупав в
          ближайщем к тебе магазине.
        </p>
        <Header>Товары под заказ:</Header>
        <ul>
          <li>Диски для игры в диск-гольф;</li>
          <li>Корзины для оборудования диск-гольф парков;</li>
          <li>Складные, тренировочные корзины для игры в диск-гольф;</li>
          <li>Диск-гольф сувениры.</li>
        </ul>
      </TextContainer>
    </Row>
    <Row imagePosition='right'>
      <TextContainer>
        <Header>Предоставляемые услуги:</Header>
        <ul>
          <li>
            Проведение диск-гольф турниров (семейных, корпоративных, дружеских);
          </li>
          <li>Индивидуальные и групповые тренировки;</li>
          <li>Секции.</li>
        </ul>
        <Header>
          Корпоративному сектору в любой точке РФ и стран СНГ мы предлагаем:
        </Header>
        <ul>
          <li>
            Проектирование, оборудование тренировочных и профессиональных
            диск-гольф парков;
          </li>
          <li>Изготовление дисков с индивидуальным дизайном;</li>
          <li>Проведение лиг и турниров по диск-гольфу;</li>
          <li>Проведение мини-турниров в составе корпоративных мероприятий;</li>
          <li>Постоянные групповые тренировки по диск-гольфу.</li>
        </ul>
        <p>Мы всегда ждем звонка от Вас!</p>
      </TextContainer>
      <ImageContainer>
        <CustomImage src={ServiceImg} position='right' />
      </ImageContainer>
    </Row>
  </PageContainer>
);

export default Service;
