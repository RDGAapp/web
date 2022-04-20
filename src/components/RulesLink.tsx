import styled from 'styled-components';

import { ReactComponent as FileSvg } from 'assets/file.svg';
import DiscGolfRules from 'assets/rules.pdf';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-style: italic;
  line-height: 1;

  ${({ theme }) => theme.media.tablet} {
    margin: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const LinkDescription = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.8rem;
  line-height: 1;
`;

const RulesLink = (): JSX.Element => (
  <Wrapper>
    <a href={DiscGolfRules} download="disc-golf-rules">
      {'Скачать полные правила диск-гольфа'.toUpperCase()}
    </a>
    <LinkDescription>
      <FileSvg width={24} height={24} />
      .pdf / 258 КБ
    </LinkDescription>
  </Wrapper>
);

export default RulesLink;
