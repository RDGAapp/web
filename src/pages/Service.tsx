import styled from 'styled-components';

import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1;
`;

const Service = (): JSX.Element => (
  <>
    <PageHeader text="Наши услуги" />
    <PageHeader text="Диски для точных попаданий и невероятных траекторий!" />
    <ContentContainer>
      <TextContainer>
        <Text>
          Возможно твой первый диск был куплен в спорттоварах или найден на антрисолях,
          в лучшем случае это диск из Декатлона. Начало положено и пора задуматься над
          приобретением диска, который будет следовать твоим желаниям и лететь куда ты хочешь.
          <br />
          Диски ты легко сможешь заказать через интернет либо купить пощупав
          в ближайщем к тебе магазине.
        </Text>
        <Header>{'Товары под заказ:'.toUpperCase()}</Header>
        <Text>
          <ul style={{ margin: 0 }}>
            <li>
              Диски для игры в диск-гольф;
            </li>
            <li>
              Корзины для оборудования диск-гольф парков;
            </li>
            <li>
              Складные, тренировочные корзины для игры в диск-гольф;
            </li>
            <li>
              Диск-гольф сувениры.
            </li>
          </ul>
        </Text>
        <Header>{'Предоставляемые услуги:'.toUpperCase()}</Header>
        <Text>
          <ul style={{ margin: 0 }}>
            <li>
              Проведение диск-гольф турниров (семейных, корпоративных, дружеских);
            </li>
            <li>
              Индивидуальные и групповые тренировки;
            </li>
            <li>
              Секции.
            </li>
          </ul>
        </Text>
        <Text>
          Наши координаты для заказа указаны внизу страницы.
        </Text>
      </TextContainer>
    </ContentContainer>
    <PageHeader text="Диск-гольф против дивана: сделай диск-гольф сильней!" />
    <ContentContainer>
      <SubHeader>
        Корпоративному сектору в любой точке РФ и стран СНГ мы предлагаем:
      </SubHeader>
      <Text>
        <ul>
          <li>
            Проектирование, оборудование тренировочных и профессиональных диск-гольф парков;
          </li>
          <li>
            Изготовление дисков с индивидуальным дизайном;
          </li>
          <li>
            Проведение лиг и турниров по диск-гольфу;
          </li>
          <li>
            Проведение мини-турниров в составе корпоративных мероприятий;
          </li>
          <li>
            Постоянные групповые тренировки по диск-гольфу.
          </li>
        </ul>
      </Text>
      <Text>
        Наши координаты для заказа указаны ниже! Мы всегда ждем звонка от Вас!
      </Text>
    </ContentContainer>
  </>
);

export default Service;
