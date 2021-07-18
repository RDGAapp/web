import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import routes from 'helpers/routes';
import Image from 'assets/newbie-img.png';

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
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
`;

const Header = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  line-height: 29px;
  margin: 0;
`;

const StyledHeader = styled(Header)`
  font-size: 36px;
  line-height: 43px;
`;

const StyledImage = styled.div`
  width: 530px;
  height: 440px;
  border-radius: 20px;
  flex-grow: 0;
  background: center url(${Image});
  background-size: 750px 440px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 750px;
  }
`;

const Newbie = (): JSX.Element => (
  <Layout>
    <PageHeader text="Участвовать в турнире для начинающих!" />
    <ContentContainer>
      <ArticleContainer>
        <TextContainer>
          <Text>
            Ты только начинаешь играть в диск-гольф? Тогда обязательно приходи на наши турниры!
            <br />
            Турнир - это азарт и драйв, здесь буря эмоций борются с выдержкой и холодным расчетом,
            огромная мотивация к хорошей игре, море опыта и отличных знакомств!
          </Text>
          <Header>
            {'Внимание! К турнирам допускаются игроки, прошедшие минимум два '.toUpperCase()}
            <Link
              to={`${routes.MASTER}${routes.MENU}`}
              style={{ color: 'black' }}
              smooth
            >
              {'мастер-класса!'.toUpperCase()}
            </Link>
          </Header>
          <Text>
            В Москве, Санкт-Петербурге и Екатеринбурге действует рейтинговая система
            отраженная в цветных браслетах. Участвуй в турнирах и мастер-классах,
            приходи на тренировки - повышай уровень игры и побеждай в турнирах!
          </Text>
          <Text>
            Ждём тебя на каждом турнире из расписания. Будь вовремя, мы начинаем в указанное время!
          </Text>
          <StyledHeader>
            {'Ближайший Турнир в твоем городе:'.toUpperCase()}
          </StyledHeader>
          {/* TODO: create CitySelector with localStore management */}
          Здесь будет селектор
        </TextContainer>
        <StyledImage />
      </ArticleContainer>
    </ContentContainer>
  </Layout>
);

export default Newbie;
