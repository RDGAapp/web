import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import routes from 'helpers/routes';
import Image from 'assets/newbie-img.png';
import CitySelect from 'components/CitySelect';
import CityEvent from 'components/CityEvent';
import useShortCity from 'helpers/useShortCity';
import useStorage from '../helpers/useStorage';

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

const Header = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
  font-style: italic;
  line-height: 29px;
`;

const StyledHeader = styled(Header)`
  font-size: 36px;
  font-style: normal;
  line-height: 43px;
`;

const StyledImage = styled.img`
  flex-grow: 0;
  width: 530px;
  height: 440px;
  background: center url(${Image});
  background-size: 750px 440px;
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 750px;
  }
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface NewbieProps {
  openCitySelect: () => void,
}

const Newbie = ({ openCitySelect }: NewbieProps): JSX.Element => {
  const city = useShortCity();
  const { newbie } = useStorage();

  return (
    <>
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
              Ждём тебя на каждом турнире из расписания.
              Будь вовремя, мы начинаем в указанное время!
            </Text>
            <StyledHeader>
              {'Ближайший Турнир в твоем городе:'.toUpperCase()}
            </StyledHeader>
            <CityContainer>
              <div>
                <CitySelect onClick={openCitySelect} />
              </div>
              {city && (<CityEvent data={newbie.cities[city]} />)}
            </CityContainer>
          </TextContainer>
          <StyledImage alt="" />
        </ArticleContainer>
      </ContentContainer>
    </>
  );
};

export default Newbie;
