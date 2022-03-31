import styled from 'styled-components';
// @ts-ignore pdf import
import DiscGolfRules from 'assets/disc-golf-rules-2018.pdf';
import { ReactComponent as File } from 'assets/file.svg';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: black;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
  font-style: italic;
  line-height: 24px;
  text-decoration: none;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 50%;
  }

  p {
    margin: 0;
    text-decoration: underline;
  }
`;

const LinkDescription = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin-left: 30px;
  font-weight: 400;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: 18px;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: flex-end;
    width: 50%;
  }
`;

const RulesLink = (): JSX.Element => (
  <Wrapper href={DiscGolfRules} download="disc-golf-rules">
    <p>{'Скачать полные правила диск-гольфа'.toUpperCase()}</p>
    <LinkDescription>
      <File width={24} height={24} />
      .pdf / 513 Кб
    </LinkDescription>
  </Wrapper>
);

export default RulesLink;
