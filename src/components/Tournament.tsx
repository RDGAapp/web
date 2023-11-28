import styled from 'styled-components';

import TournamentType from 'enums/tournamentType';
import { spellMonth } from 'helpers/dateHelpers';
import TournamentColorByType from 'helpers/tournamentColorByType';

const Container = styled.div<{ border: string; maxWidth: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: ${(props) => props.maxWidth};
  height: 3rem;
  padding: 0 0.3rem;
  overflow: hidden;
  border: 0.1rem solid ${(props) => props.border};
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    flex-basis: ${(props) => props.maxWidth};
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
  maxWidth?: string;
}

const Tournament = ({
  name,
  type,
  town,
  startDate,
  endDate,
  maxWidth = 'max-content',
}: Props) => (
  <Container
    title={name}
    border={TournamentColorByType[type as TournamentType]}
    maxWidth={maxWidth}
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
