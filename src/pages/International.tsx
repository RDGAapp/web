import styled from 'styled-components';

import { ReactComponent as YouTubeSvg } from 'assets/icons/youtube.svg';
import Image from 'assets/images/international.webp';
import ContentContainer from 'components/ContentContainer';
import OuterLink from 'components/OuterLink';
import PageHeader from 'components/PageHeader';
import Text from 'components/Text';

const ArticleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 60px 25px;

  ${({ theme }) => theme.media.tablet} {
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

  ${({ theme }) => theme.media.tablet} {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  flex-grow: 0;
  width: 530px;
  height: 700px;
  background: center url(${Image});
  background-size: cover;
  border-radius: 20px;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    max-width: 750px;
    height: 480px;
    background-size: cover;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;

const International = (): JSX.Element => (
  <>
    <PageHeader text="Стань игроком мирового уровня!" />
    <ContentContainer>
      <ArticleContainer>
        <TextContainer>
          <Text>
            Ты занимаешь призовые места на федеральных турнирах
            - решайся, и участвуй в международных!
            <br />
            Опыт участия в таких эвентах поднимет уровень твоей игры до новых высот!
            <br />
            Новые страны, новые парки, теплые знакомства - секреты игры!
          </Text>
          <Text>
            Диск-гольф очень распространенный вид спорта в Европе (особенно Скандинавии)
            и Америке (особенно в  США).
            <br />
            Посмотреть календарь турниров и выбрать на какой поехать ты можешь
            на официальном сайте международной профессиональной ассоциации диск-гольфа:
          </Text>
          <LinkContainer>
            <OuterLink link="pdga.com/tour/events" />
          </LinkContainer>
          <Text>
            А также:
          </Text>
          <LinkContainer>
            <OuterLink link="discgolfmetrix.com" />
            <OuterLink link="UDisc.com" />
          </LinkContainer>
          <Text>
            Также смотри записи официальных турниров на ютубе, например на канале JomezPro:
          </Text>
          <LinkContainer>
            <OuterLink link="youtube.com/c/JomezProductions/videos">
              <YouTubeSvg height={20} />
            </OuterLink>
          </LinkContainer>
        </TextContainer>
        <StyledImage alt="" />
      </ArticleContainer>
    </ContentContainer>
  </>
);

export default International;
