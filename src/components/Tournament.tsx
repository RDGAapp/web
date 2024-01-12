import styled from 'styled-components';

import TournamentType from 'enums/tournamentType';
import { spellMonth } from 'helpers/dateHelpers';
import TournamentColorByType from 'helpers/tournamentColorByType';

const Container = styled.div<{
  $color: string;
  $maxWidth: string;
  $metrixId: string | null;
}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: ${(props) => props.$maxWidth};
  height: 3rem;
  padding: 0 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  & a {
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    flex-basis: 100%;

    ${(props) =>
      props.$metrixId
        ? `background-color: ${props.$color};`
        : `border: 2px solid ${props.$color}`}
  }

  & * {
    max-width: 100%;
    overflow: hidden;
    font-size: 0.8rem;
    line-height: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const ExtraTournamentInformation = styled.div`
  font-size: 0.5rem;
  line-height: 1.5;

  & * {
    font-size: 0.6rem;
    line-height: 1;
  }
`;

interface Props {
  name: string;
  type: string;
  town: string;
  startDate: Date;
  endDate: Date;
  metrixId: string | null;
  maxWidth?: string;
}

const Tournament = ({
  name,
  type,
  town,
  startDate,
  endDate,
  maxWidth = 'max-content',
  metrixId,
}: Props) => (
  <Container
    title={name}
    $color={TournamentColorByType[type as TournamentType]}
    $maxWidth={maxWidth}
    $metrixId={metrixId}
    style={{
      cursor: metrixId ? 'pointer' : 'default',
    }}
    onClick={() => {
      if (!metrixId) return;

      window.open(`https://discgolfmetrix.com/${metrixId}`, '_blank');
    }}
  >
    <b>{name}</b>
    <ExtraTournamentInformation>
      <i>{town}</i>
    </ExtraTournamentInformation>
    <ExtraTournamentInformation>
      {`${startDate.getDate()} ${spellMonth(startDate.getMonth())}`}
      {startDate.getDate() !== endDate.getDate() &&
        ` - ${endDate.getDate()} ${spellMonth(endDate.getMonth())}`}
    </ExtraTournamentInformation>
  </Container>
);

export default Tournament;
