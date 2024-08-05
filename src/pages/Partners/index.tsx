import styled from 'styled-components';

import AhoySvg from 'assets/icons/ahoy.svg?react';
import StereoSvg from 'assets/icons/stereo.svg?react';
import ZhilyByliSvg from 'assets/icons/zhilybyli.svg?react';
import AhoyImg from 'assets/images/ahoy.webp';
import PartnersImg from 'assets/images/partners1.webp';
import ZhilyByliImg from 'assets/images/partners2.webp';
import StereoPiterImg from 'assets/images/stereopiter.png';
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

  & a {
    color: transparent;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus-visible {
      scale: 1.1;
    }
  }
`;

const partners = [
  {
    Image: ZhilyByliImg,
    header: 'ЖилиБыли',
    text: (
      <>
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
      </>
    ),
  },
  {
    Image: AhoyImg,
    header: 'AhoyDiscs',
    text: (
      <>
        Первый онлайн диск гольф магазин в России. Всё, что может вам
        понадобиться для любимой игры, можете найти на сайте{' '}
        <a href='https://ahoydiscs.ru' rel='noreferrer' target='_blank'>
          ahoydiscs.ru
        </a>
      </>
    ),
  },
  {
    Image: StereoPiterImg,
    header: 'СтереоПитер',
    text: (
      <>
        Школа музыки, где все занятия проходят индивидуально. (
        <a href='https://stereopiter.ru' rel='noreferrer' target='_blank'>
          stereopiter.ru
        </a>
        )
        <br />
        Не упустите шанс стать настоящим музыкантом – приходите в нашу школу
        музыки и начинайте свой творческий путь уже сегодня!
        <br />
        Скидка 10% на все услуги и покупку музыкального оборудования
      </>
    ),
  },
];

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
        <a href='https://stereopiter.ru' rel='noreferrer' target='_blank'>
          <StereoSvg width={200} />
        </a>
      </LooperContent>
    </InfiniteLooper>
    <Row $imagePosition='left'>
      <ImageContainer>
        <CustomImage src={PartnersImg} $position='left' />
      </ImageContainer>
      <TextContainer $position='right'>
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
    {partners.map((partner, index) => (
      <Row
        $imagePosition={index % 2 === 0 ? 'right' : 'left'}
        key={partner.header}
      >
        <ImageContainer>
          <CustomImage
            src={partner.Image}
            $position={index % 2 === 0 ? 'right' : 'left'}
          />
        </ImageContainer>
        <TextContainer $position={index % 2 === 0 ? 'left' : 'right'}>
          <Header>{partner.header}</Header>
          <p>{partner.text}</p>
        </TextContainer>
      </Row>
    ))}
  </PageContainer>
);

export default PartnersPage;
