import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import Image from 'assets/pro-img.png';
import CitySelect from 'components/CitySelect';
import CityEvent from 'components/CityEvent';
import useShortCity from 'helpers/useShortCity';
import useStorage from 'helpers/useStorage';

const StyledImage = styled.img`
  width: 100%;
  max-width: 1360px;
  height: 605px;
  border-radius: 20px;
  flex-grow: 0;
  background: center url(${Image});
  background-size: 1360px 605px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 750px;
    height: 330px;
    background-size: 750px 330px;
  }
`;

const Header = styled.h3`
  width: 100%;
  font-family: Inter, sans-serif;
  font-size: 36px;
  font-style: normal;
  line-height: 43px;
  font-weight: 600;
  margin: 0;
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
        <Header>
          {'Ближайший PRO-Турнир в твоем городе:'.toUpperCase()}
        </Header>
        <CityContainer>
          <div>
            <CitySelect onClick={openCitySelect} />
          </div>
          {city && (<CityEvent data={pro.cities[city]} />)}
        </CityContainer>
      </ContentContainer>
    </>
  );
};

export default Pro;
