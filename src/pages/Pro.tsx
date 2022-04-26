import styled from 'styled-components';

import Image from 'assets/images/pro-img.webp';
import CityEvent from 'components/CityEvent';
import CitySelect from 'components/CitySelect';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import useShortCity from 'helpers/useShortCity';
import useStorage from 'helpers/useStorage';

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

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ProProps {
  openCitySelect: () => void,
}

const Pro = ({ openCitySelect }: ProProps): JSX.Element => {
  const city = useShortCity();
  const { pro } = useStorage();

  return (
    <>
      <PageHeader text="Участвовать в PRO-турнире!" />
      <ContentContainer>
        <Text>
          Диск-гольф - это твоё, ты хочешь бросать диск точнее и дальше,
          ты перерос турниры для начинающих игроков, твой уровень игры соответствует
          желтому браслету и выше.... ЗдОрово! Ждём тебя на турнирах для профессионалов.
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
        <CityContainer>
          <CitySelect onClick={openCitySelect} />
          {city && (<CityEvent data={pro[city]} header="Ближайший PRO-Турнир в твоем городе:" />)}
        </CityContainer>
      </ContentContainer>
    </>
  );
};

export default Pro;
