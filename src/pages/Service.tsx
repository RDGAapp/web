import DiscsShopImg from 'assets/images/service1.webp';
import ServiceImg from 'assets/images/service2.webp';
import {
  CustomImage,
  ImageContainer,
  PageContainer,
  Row,
  TextContainer,
} from 'components/PageContent';
import SubHeader from 'components/SubHeader';

import type { JSX } from "react";

const Service = (): JSX.Element => (
  <PageContainer>
    <Row $imagePosition='left'>
      <ImageContainer>
        <CustomImage src={DiscsShopImg} $position='left' />
      </ImageContainer>
      <TextContainer $position='right'>
        <SubHeader>
          Диски для точных попаданий и невероятных траекторий!
        </SubHeader>
        <p>
          Возможно твой первый диск был куплен в спорттоварах или найден на
          антрисолях, в лучшем случае это диск из Декатлона. Начало положено и
          пора задуматься над приобретением диска, который будет следовать твоим
          желаниям и лететь куда ты хочешь.
          {'\n'}
          Диски ты легко сможешь заказать через интернет либо купить пощупав в
          ближайщем к тебе магазине.
        </p>
        <SubHeader>Товары под заказ:</SubHeader>
        <ul>
          <li>Диски для игры в диск-гольф;</li>
          <li>Корзины для оборудования диск-гольф парков;</li>
          <li>Складные, тренировочные корзины для игры в диск-гольф;</li>
          <li>Диск-гольф сувениры.</li>
        </ul>
      </TextContainer>
    </Row>
    <Row $imagePosition='right'>
      <TextContainer $position='left'>
        <SubHeader>Предоставляемые услуги:</SubHeader>
        <ul>
          <li>
            Проведение диск-гольф турниров (семейных, корпоративных, дружеских);
          </li>
          <li>Индивидуальные и групповые тренировки;</li>
          <li>Секции.</li>
        </ul>
        <SubHeader>
          Корпоративному сектору в любой точке РФ и стран СНГ мы предлагаем:
        </SubHeader>
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
        <CustomImage src={ServiceImg} $position='right' />
      </ImageContainer>
    </Row>
  </PageContainer>
);

export default Service;
