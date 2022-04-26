import styled from 'styled-components';

import AmericaVideo from 'assets/images/america-video.webp';
import Image from 'assets/images/main-page.webp';
import RussiaVideo from 'assets/images/russia-video.webp';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import RulesLink from 'components/RulesLink';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';
import VideoLink from 'components/VideoLink';

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: flex-start;
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;
  max-width: 60%;

  ${({ theme }) => theme.media.tablet} {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  flex-basis: 26rem;
  flex-grow: 0;
  height: 29rem;
  background: center url(${Image});
  border-radius: 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-basis: 36rem;
    width: 100%;
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
          link="https://youtube.com/watch?v=AHVF5cFDOEU"
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
