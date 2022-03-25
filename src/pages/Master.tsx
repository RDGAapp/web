import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import ContentContainer from 'components/ContentContainer';
import CitySelect from 'components/CitySelect';
import useShortCity from 'helpers/useShortCity';
import CityEvent from 'components/CityEvent';
import Image from 'assets/master-img.png';
import useStorage from '../helpers/useStorage';

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

const StyledHeader = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 530px;
  height: 830px;
  border-radius: 20px;
  flex-grow: 0;
  background: center url(${Image});
  background-size: 530px 830px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 750px;
    background-size: 750px 1050px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    max-width: 530px;
    background-size: 530px 830px;
  }
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface MasterProps {
  openCitySelect: () => void,
}

const Master = ({ openCitySelect }: MasterProps): JSX.Element => {
  const city = useShortCity();
  const { master } = useStorage();
  return (
    <>
      <PageHeader text="Пройти Мастер-класс" />
      <ContentContainer>
        <ArticleContainer>
          <TextContainer>
            <Text>
              В 2021 году мы регулярно и бесплатно проводим мастер-классы!
              Приходи один или с друзьями - с собой ничего не нужно!
              Научись красиво и метко кидать фрисби, насладись красотой
              запущенного тобой диска - это действительно клёво!
            </Text>
            <StyledHeader>
              {'Ближайший мастер класс в твоем городе:'.toUpperCase()}
            </StyledHeader>
            <CityContainer>
              <div>
                <CitySelect onClick={openCitySelect} />
              </div>
              {city && (<CityEvent data={master.cities[city]} />)}
            </CityContainer>
          </TextContainer>
          <StyledImage alt="" />
        </ArticleContainer>
      </ContentContainer>
    </>
  );
};

export default Master;
