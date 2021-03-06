import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import Image from 'assets/images/newbie.webp';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import TownEvent from 'components/TownEvent';
import TownSelect from 'components/TownSelect';
import routes from 'helpers/routes';
import useShortTown from 'hooks/useShortTown';
import useStorage from 'hooks/useStorage';

const ArticleContainer = styled.article`
  display: flex;
  flex-flow: row nowrap;
  gap: 3rem 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;

  ${({ theme }) => theme.media.tablet} {
    flex-basis: 100%;
  }
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const StyledImage = styled.img`
  flex-basis: 26rem;
  height: 22rem;
  background: center url(${Image});
  background-size: cover;
  border-radius: 2rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-basis: 37rem;
  }
`;

const TownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface NewbieProps {
  openTownSelect: () => void,
}

const Newbie = ({ openTownSelect }: NewbieProps): JSX.Element => {
  const town = useShortTown();
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
            <TownContainer>
              <TownSelect onClick={openTownSelect} />
              {town && (<TownEvent data={newbie[town]} header="Ближайший Турнир в твоем городе:" />)}
            </TownContainer>
          </TextContainer>
          <StyledImage alt="" />
        </ArticleContainer>
      </ContentContainer>
    </>
  );
};

export default Newbie;
