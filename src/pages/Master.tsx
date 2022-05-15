import styled from 'styled-components';

import Image from 'assets/images/master.webp';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import TownEvent from 'components/TownEvent';
import TownSelect from 'components/TownSelect';
import useShortTown from 'hooks/useShortTown';
import useStorage from 'hooks/useStorage';

const ArticleContainer = styled.article`
  display: flex;
  flex-flow: row nowrap;
  gap: 3rem 2rem;

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
  gap: 32px;

  ${({ theme }) => theme.media.tablet} {
    flex-basis: 100%;
  }
`;

const StyledImage = styled.img`
  flex-basis: 26rem;
  flex-grow: 0;
  height: 41rem;
  background: center url(${Image});
  background-size: 26rem 41rem;
  border-radius: 2rem;
`;

interface MasterProps {
  openTownSelect: () => void;
}

const Master = ({ openTownSelect }: MasterProps): JSX.Element => {
  const town = useShortTown();
  const { master } = useStorage();
  return (
    <>
      <PageHeader text="Пройти Мастер-класс" />
      <ContentContainer>
        <ArticleContainer>
          <TextContainer>
            <Text>
              В
              {' '}
              {new Date().getFullYear().toString()}
              {' '}
              году мы регулярно и бесплатно проводим мастер-классы! Приходи один
              или с друзьями - с собой ничего не нужно! Научись красиво и метко
              кидать фрисби, насладись красотой запущенного тобой диска - это
              действительно клёво!
            </Text>
            <TownSelect onClick={openTownSelect} />
            {town && <TownEvent data={master[town]} header="Ближайший мастер класс в твоем городе:" />}
          </TextContainer>
          <StyledImage alt="" />
        </ArticleContainer>
      </ContentContainer>
    </>
  );
};

export default Master;
