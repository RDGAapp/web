import styled from 'styled-components';

import AmericaVideo from 'assets/images/america-video.webp';
import Image1 from 'assets/images/home1.webp';
import Image2 from 'assets/images/home2.webp';
import Image3 from 'assets/images/home3.webp';
import RussiaVideo from 'assets/images/russia-video.webp';
import {
  TextContainer,
  Row,
  ImageContainer,
  CustomImage,
} from 'components/PageContent';
import RulesLink from 'components/RulesLink';
import SubHeader from 'components/SubHeader';
import Stepper from 'pages/Home/Stepper';
import VideoLink from 'pages/Home/VideoLink';

const ArticleContainer = styled.article`
  display: grid;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Home = (): JSX.Element => (
  <ArticleContainer>
    <Row imagePosition='left'>
      <ImageContainer>
        <CustomImage src={Image1} position='left' />
      </ImageContainer>
      <TextContainer position='right'>
        <SubHeader>Что такое диск-гольф?</SubHeader>
        <p>
          Индивидуальный вид спорта с диском, где игроки, соревнуясь, пытаются
          пройти отрезки дистанции за наименьшее количество бросков диска.
          Первый бросок совершается со стартовой точки - «ти». Каждый
          последующий бросок выполняется с места остановки диска. И так пока
          диск не окажется в корзине.
        </p>
        <p>
          Диск-гольф парки обычно прекрасно вписываются в инфраструктуру
          городских парков, лесопарков - там, где есть разнообразный ландшафт,
          предлагающий естественные преграды на траектории полета диска. Эти
          препятствия являются важной частью игры.
        </p>
      </TextContainer>
    </Row>

    <VideoContainer>
      <VideoLink
        header='В России'
        image={RussiaVideo}
        link='https://youtu.be/nEGf3sRlPek'
        name='Презентация диск-гольфа'
        position='left'
      />
      <VideoLink
        header='В мире'
        image={AmericaVideo}
        link='https://youtube.com/watch?v=AHVF5cFDOEU'
        name='This is Disc-Golf - Spin.tv'
        position='right'
      />
    </VideoContainer>

    <Row imagePosition='right'>
      <TextContainer position='left'>
        <SubHeader>Почему это увлекает?</SubHeader>
        <p>
          Вы заметили в видео, что диски летят (будто плывут в воздухе) очень
          далеко и точно, по задуманной игроком траектории - во-первых, это
          очень красиво, во-вторых, очень приятно, когда получается бросить всё
          дальше и точнее, а дополнительные яркие эмоции - это возбуждение и
          азарт от спортивной конкуренции во время соревнований.
        </p>
      </TextContainer>
      <ImageContainer>
        <CustomImage src={Image2} position='right' />
      </ImageContainer>
    </Row>

    <Row imagePosition='left'>
      <ImageContainer>
        <CustomImage src={Image3} position='left' />
      </ImageContainer>
      <TextContainer position='right'>
        <SubHeader>А теперь в 2-х словах о правилах:</SubHeader>
        <p>
          Цель игры: попасть в мишень (корзину), сделав меньшее количество
          бросков. Краткие (очень) правила игры:
        </p>
        <ul>
          <li>
            Со старта каждого игрового отрезка (площадка Ти) игроки по очереди
            совершают первый бросок (каждый своим диском) в сторону корзины;
          </li>
          <li>
            Следующие броски совершаются точно с того места, где остановился
            диск после предыдущего броска, в итоге нужно попасть в корзину;
          </li>
          <li>
            На каждом отрезке игроки считают количество совершенных бросков;
          </li>
          <li>
            После прохождение всех отрезков - количество бросков суммируется;
          </li>
          <li>Победил тот, кто совершил меньше всего бросков.</li>
        </ul>
        <RulesLink />
      </TextContainer>
    </Row>
    <Stepper />
  </ArticleContainer>
);

export default Home;
