import styled from 'styled-components';

import { ReactComponent as FileSvg } from 'assets/icons/file.svg';
import AccreditationDocPdf from 'assets/tournamentAccreditation.pdf';

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

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    transition: scale 0.3s ease-in-out;

    :hover {
      scale: 1.1;
    }

    :active {
      scale: 0.9;
    }
  }
`;

const AccreditationDocLink = (): JSX.Element => (
  <Container>
    <FileSvg width={24} height={24} />
    <a href={AccreditationDocPdf} download='rdga-tournament-accreditation'>
      Изучить весь порядок Аккредитации
    </a>
    .pdf / 332 КБ
  </Container>
);

export default AccreditationDocLink;
