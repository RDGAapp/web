import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import OuterLink from 'components/OuterLink';
import Image from 'assets/international-img.png';
import { ReactComponent as YouTubeSvg } from 'assets/youtube.svg';

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

const StyledImage = styled.img`
  width: 530px;
  height: 700px;
  border-radius: 20px;
  flex-grow: 0;
  background: center url(${Image});
  background-size: 1100px 700px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    max-width: 750px;
    height: 480px;
    background-size: 750px 480px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
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
            и Америке (сообенно в  США).
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
              <YouTubeSvg />
            </OuterLink>
          </LinkContainer>
        </TextContainer>
        <StyledImage alt="" />
      </ArticleContainer>
    </ContentContainer>
  </>
);

export default International;
