import styled from 'styled-components';

import { ReactComponent as FileSvg } from 'assets/icons/file.svg';
import getFileUrl from 'helpers/getFileUrl';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  font-style: italic;
  line-height: 1;

  ${({ theme }) => theme.media.tablet} {
    margin: auto;
  }

  & a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.2s ease-in-out;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const AccreditationDocLink = (): JSX.Element => (
  <Container>
    <a
      href={getFileUrl('/docs//tournamentAccreditation.pdf')}
      download='rdga-tournament-accreditation'
    >
      Изучить весь порядок Аккредитации
    </a>
    <FileSvg width={24} height={24} />
    .pdf / 332 КБ
  </Container>
);

export default AccreditationDocLink;
