import styled from 'styled-components';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import VideoLink from 'components/VideoLink';
import Text from 'components/Text';
import SubHeader from 'components/SubHeader';
import RulesLink from 'components/RulesLink';
import RussiaVideo from 'assets/russia-video.png';
import AmericaVideo from 'assets/america-video.png';
import Image from 'assets/main-page-img.png';

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-wrap: wrap;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 60px 25px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
  max-width: 60%;

  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  flex-grow: 0;
  width: 530px;
  height: 580px;
  background: center url(${Image});
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 752px;
  }
`;

const Home = (): JSX.Element => (
  <>
    <PageHeader text="Что такое диск-гольф? Видео — лучше слов: узнай за 2 минуты!" />
    <ContentContainer>
      <VideoContainer>
        <VideoLink
          header="В России"
          image={RussiaVideo}
          link="https://youtu.be/nEGf3sRlPek"
          name="Презентация диск-гольфа"
        />
        <VideoLink
          header="В Америке"
          image={AmericaVideo}
          link="https://www.youtube.com/watch?v=AHVF5cFDOEU"
          name="This is Disc-Golf - Spin.tv"
        />
      </VideoContainer>
      <ArticleContainer>
        <TextContainer>
          <Text>
            Почему это увлекает? Вы заметили в видео, что диски летят (будто плывут в воздухе)
            очень далеко и точно, по задуманной игроком траектории - во-первых, это очень красиво,
            во-вторых, очень приятно, когда получается бросить всё дальше и точнее, а дополнительные
            яркие эмоции - это возбуждение и азарт от спортивной конкуренции во время соревнований.
          </Text>
          <SubHeader>А теперь в 2-х словах о правилах:</SubHeader>
          <Text>
            Цель игры: попасть в мишень (корзину), сделав меньшее количество бросков.
            Краткие (очень) правила игры:
            <ul>
              <li>
                Со старта каждого игрового отрезка (площадка Ти) игроки по очереди совершают
                первый бросок (каждый своим диском) в сторону корзины;
              </li>
              <li>
                Следующие броски совершаются точно с того места, где остановился диск после
                предыдущего броска, в итоге нужно попасть в корзину;
              </li>
              <li>
                На каждом отрезке игроки считают количество совершенных бросков;
              </li>
              <li>
                После прохождение всех отрезков - количество бросков суммируется;
              </li>
              <li>
                Победил тот, кто совершил меньше всего бросков.
              </li>
            </ul>
          </Text>
          <RulesLink />
        </TextContainer>
        <StyledImage alt="" />
      </ArticleContainer>
    </ContentContainer>
  </>
);

export default Home;
