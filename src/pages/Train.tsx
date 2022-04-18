import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';
import ContentContainer from 'components/ContentContainer';
import SubHeader from 'components/SubHeader';
import RulesLink from 'components/RulesLink';
import Image from 'assets/train-img.png';

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

const StyledImage = styled.img`
  flex-grow: 0;
  width: 520px;
  height: 420px;
  background: center url(${Image});
  background-size: 750px 420px;
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 750px;
  }
`;

const Train = (): JSX.Element => (
  <>
    <PageHeader text="Играть самому и с друзьями" />
    <ContentContainer>
      <ArticleContainer>
        <TextContainer>
          <Text>
            Парки для игры в диск-гольф обычно общедоступны.
            Ты всегда можешь потренироваться сам или сыграть в диск-гольф с друзьями.
          </Text>
          <SubHeader>
            Для игры каждому участнику понадобится:
          </SubHeader>
          <Text>
            <ul style={{ margin: '0' }}>
              <li>
                Минимум один диск для игры;
              </li>
              <li>
                Знание основных правил диск-гольфа.
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

export default Train;
