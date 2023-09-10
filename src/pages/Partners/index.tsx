import styled from 'styled-components';

import { ReactComponent as AhoySvg } from 'assets/icons/ahoy.svg';
import { ReactComponent as ZhilyByliSvg } from 'assets/icons/zhilybyli.svg';
import AhoyImg from 'assets/images/ahoy.webp';
import PartnersImg from 'assets/images/partners1.webp';
import ZhilyByliImg from 'assets/images/partners2.webp';
import CustomLink from 'components/CustomLink';
import InfiniteLooper from 'components/InfiniteLooper';
import {
  Header,
  TextContainer,
  Row,
  PageContainer,
  ImageContainer,
  CustomImage,
} from 'components/PageContent';

const LooperContent = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
  height: 3rem;
  margin-right: 1rem;
  overflow: hidden;

  a {
    color: transparent;
  }
`;

const PartnersPage = () => (
  <PageContainer>
    <Header>Наши партнеры</Header>
    <InfiniteLooper speed={5} direction='left'>
      <LooperContent>
        <a
          href='https://zhilibyli.ru?a=970f80'
          rel='noreferrer'
          target='_blank'
        >
          <ZhilyByliSvg width={200} />
        </a>
        <a href='https://ahoydiscs.ru' rel='noreferrer' target='_blank'>
          <AhoySvg width={200} />
        </a>
      </LooperContent>
    </InfiniteLooper>
    <Row imagePosition='left'>
      <ImageContainer>
        <CustomImage src={PartnersImg} position='left' />
      </ImageContainer>
      <TextContainer position='right'>
        <ul>
          <li>
            <CustomLink
              route='https://zhilibyli.ru?a=970f80'
              text='ЖилиБыли'
              isExternal
            />
            <br />
            Титульный партнёр Чемпионата России по диск-гольфу 2023
          </li>
        </ul>
        <p>Магазины дисков:</p>
        <ul>
          <li>
            <CustomLink
              route='https://ahoydiscs.ru'
              text='Магазин Ahoy Discs'
              isExternal
            />
            <br />
            скидка на товары с отметкой &quot;РДГА&quot;
          </li>
          <li>
            Скидка все диски Prodiscus у представителей компании в регионах
            (Сартаков Иван, Макаров Александр, Ярмушевич Иван)
          </li>
        </ul>
        <p>Изготовители корзин:</p>
        <ul>
          <li>
            <CustomLink
              route='https://t.me/makarov_discgolf'
              text='Макаров Александр'
              isExternal
            />
          </li>
          <li>
            <CustomLink
              route='https://t.me/Vladimirli1'
              text='Владимир Ли'
              isExternal
            />
          </li>
        </ul>
      </TextContainer>
    </Row>
    <Row imagePosition='right'>
      <ImageContainer>
        <CustomImage src={ZhilyByliImg} position='right' />
      </ImageContainer>
      <TextContainer position='left'>
        <Header>ЖилиБыли</Header>
        &quot;ЖилиБыли&quot; – это один из лучших сервисов по бронированию
        отелей с самыми низкими ценами. Мы предлагаем инновационное средство
        поиска по разным странам, городам, разным отелям и выбору нужного
        размещения. Мы делаем упор на качество обслуживания, потому что наша
        главная цель – обеспечивать комфорт, лёгкость и удобство ко всем
        путешественникам, которые выбрали сервис &quot;ЖилиБыли&quot;. У нас ты
        получишь все, что нужно: самую выгодную цену, простой интерфейс, онлайн
        поддержку и большой выбор предложений в 12 странах мира. И это все в
        несколько кликов! Присоединяйся к нам и твои путешествия станут ярче и
        выгоднее с сервисом бронирования отелей &quot;ЖилиБыли&quot;.
      </TextContainer>
    </Row>
    <Row imagePosition='left'>
      <ImageContainer>
        <CustomImage src={AhoyImg} position='left' />
      </ImageContainer>
      <TextContainer position='right'>
        <Header>AhoyDiscs</Header>
        <p>
          Первый онлайн диск гольф магазин в России. Всё, что может вам
          понадобиться для любимой игры, можете найти на сайте{' '}
          <a href='https://ahoydiscs.ru' rel='noreferrer' target='_blank'>
            ahoydiscs.ru
          </a>
        </p>
      </TextContainer>
    </Row>
  </PageContainer>
);

export default PartnersPage;
