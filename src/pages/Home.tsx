import styled from 'styled-components';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import VideoLink from 'components/VideoLink';
import RussiaVideo from 'assets/russia-video.png';
import AmericaVideo from 'assets/america-video.png';
import { ReactComponent as File } from 'assets/file.svg';
import Image from 'assets/main-page-img.png';
// @ts-ignore pdf import
import DiscGolfRules from 'assets/disc-golf-rules-2018.pdf';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 60px 120px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0 24px 120px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 40px;
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-wrap: wrap;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
  max-width: 60%;

  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
`;

const Text = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  margin: 0;
`;

const SubHeader = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin: 32px 0;
`;

const RulesLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  
  p {
    margin: 0;
    text-decoration: underline;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 50%;
    }
  }
`;

const LinkDescription = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left: 30px;
  gap: 15px;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: flex-end;
    width: 50%;
  }
`;

const StyledImage = styled.div`
  width: 530px;
  height: 580px;
  border-radius: 20px;
  flex-grow: 0;
  background: center url(${Image});

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 752px;
  }
`;

const Home = (): JSX.Element => (
  <Layout>
    <PageHeader text="Что такое диск-гольф? Видео — лучше слов: узнай за 2 минуты!" />
    <Content>
      <VideoContainer>
        <VideoLink
          header="В России"
          image={RussiaVideo}
          link="https://www.youtube.com/watch?v=N_VEPWy3fdU"
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
          <SubHeader>
            {'А теперь в 2-х словах о правилах:'.toUpperCase()}
          </SubHeader>
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
          <RulesLink href={DiscGolfRules} download="disc-golf-rules">
            <p>{'Скачать полные правила диск-гольфа'.toUpperCase()}</p>
            <LinkDescription>
              <File width={24} height={24} />
              .pdf / 513 Кб
            </LinkDescription>
          </RulesLink>
        </TextContainer>
        <StyledImage />
      </ArticleContainer>
    </Content>
  </Layout>
);

export default Home;
