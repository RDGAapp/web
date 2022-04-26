import styled from 'styled-components';

import Image from 'assets/images/train.webp';
import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import RulesLink from 'components/RulesLink';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';

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
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;
  max-width: 60%;

  ${({ theme }) => theme.media.tablet} {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  flex-basis: 26rem;
  flex-grow: 0;
  height: 21rem;
  background: center url(${Image});
  background-size: 37rem 21rem;
  border-radius: 2rem;

  ${({ theme }) => theme.media.tablet} {
    flex-basis: 37rem;
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
            <ul>
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
