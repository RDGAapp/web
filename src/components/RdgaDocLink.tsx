import styled from 'styled-components';

import { ReactComponent as FileSvg } from 'assets/icons/file.svg';
import getFileUrl from 'helpers/getFileUrl';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  width: max-content;

  font-style: italic;
  line-height: 1;

  ${({ theme }) => theme.media.tablet} {
    margin: auto;
  }

  & a {
    font-weight: 600;
    color: inherit;
    transition: scale 0.2s ease-in-out;

    &:hover {
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
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

const RdgaDocLink = (): JSX.Element => (
  <Container>
    <a href={getFileUrl('/docs/rdga.pdf')} download='rdga-about'>
      Подробнее о РДГА
    </a>
    <LinkDescription>
      <FileSvg width={24} height={24} />
      .pdf / 315 КБ
    </LinkDescription>
  </Container>
);

export default RdgaDocLink;
