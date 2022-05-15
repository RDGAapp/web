import styled from 'styled-components';

import Image from 'assets/images/pro-img.webp';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import TownEvent from 'components/TownEvent';
import TownSelect from 'components/TownSelect';
import useShortTown from 'hooks/useShortTown';
import useStorage from 'hooks/useStorage';

const StyledImage = styled.img`
  flex-basis: 68rem;
  flex-grow: 0;
  height: 30rem;
  margin: 0 auto;
  background: center url(${Image});
  background-size: 68rem 30rem;
  border-radius: 2rem;

  ${({ theme }) => theme.media.tablet} {
    flex-basis: 37rem;
    height: 16rem;
    background-size: 37rem 16rem;
  }
`;

const TownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ProProps {
  openTownSelect: () => void,
}

const Pro = ({ openTownSelect }: ProProps): JSX.Element => {
  const town = useShortTown();
  const { pro } = useStorage();

  return (
    <>
      <PageHeader text="Участвовать в PRO-турнире!" />
      <ContentContainer>
        <Text>
          Диск-гольф - это твоё, ты хочешь бросать диск точнее и дальше,
          ты перерос турниры для начинающих игроков, твой уровень игры соответствует
          желтому браслету и выше.... Здо&#x301;рово! Ждём тебя на турнирах для профессионалов.
          <br />
          Диски для игры: ты можешь купить или взять в аренду.
          <br />
          Стоимость участия: 1000 рублей.
          <br />
          Ждём тебя на каждом турнире из расписания.
          <br />
          Будь во время! Мы начинаем в указанное время!
        </Text>
        <StyledImage alt="" />
        <TownContainer>
          <TownSelect onClick={openTownSelect} />
          {town && (<TownEvent data={pro[town]} header="Ближайший PRO-Турнир в твоем городе:" />)}
        </TownContainer>
      </ContentContainer>
    </>
  );
};

export default Pro;
