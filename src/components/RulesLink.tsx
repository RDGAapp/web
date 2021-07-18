import styled from 'styled-components';
// @ts-ignore pdf import
import DiscGolfRules from 'assets/disc-golf-rules-2018.pdf';
import { ReactComponent as File } from 'assets/file.svg';

const Wrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  
  p {
    margin: 0;
    text-decoration: underline;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 50%;
    }
  }
`;

const LinkDescription = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left: 30px;
  gap: 15px;

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
