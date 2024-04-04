import { useContext } from 'react';

import styled from 'styled-components';

import Tournament from 'components/Tournament';
import { AppSettingsContext } from 'context/AppSettings';
import { getMonthName, spellMonth } from 'helpers/dateHelpers';
import theme, { commonTheme } from 'helpers/theme';
import TournamentColorByType from 'helpers/tournament/typeColorByType';
import useDialog from 'hooks/useDialog';
import useMatchMedia from 'hooks/useMatchMedia';
import { TournamentType } from 'types/db';
import { ITournament } from 'types/tournament';

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.2rem 0.3rem;

  border: 1px solid ${({ theme }) => theme.colors.lighterBackground};
  border-radius: 0.5rem;

  ${({ theme }) => theme.media.smallMobile} {
    width: auto;
  }
`;

const TournamentCirclesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.1rem;
`;

const TournamentCircle = styled.div<{ border: string }>`
  aspect-ratio: 1 / 1;
  height: 0.5rem;

  background-color: ${(props) => props.border};
  border: 1px solid currentColor;
  border-radius: 100vh;
`;

const TournamentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

interface Props {
  day: Date;
  month: { monthName: string; shouldGreyOut: boolean };
  tournaments: ITournament[];
}

const CalendarDay = ({ day, month, tournaments }: Props) => {
  const { isSmallMobile } = useMatchMedia();

  const { Dialog, openModal } = useDialog({
    headerText: `Турниры ${day.getDate()} ${spellMonth(day.getMonth())}`,
  });

  const { theme: currentTheme } = useContext(AppSettingsContext);

  const getDayColor = (
    day: Date,
    monthName: string,
    shouldGreyOut: boolean,
  ) => {
    if (tournaments.length !== 0) {
      return commonTheme.colors.primary;
    }
    if (getMonthName(day) === monthName) {
      return shouldGreyOut
        ? theme[currentTheme].colors.lighterBackground
        : 'inherit';
    }
    return shouldGreyOut
      ? 'inherit'
      : theme[currentTheme].colors.lighterBackground;
  };

  const getDayTextColor = () => {
    if (tournaments.length !== 0) {
      return commonTheme.colors.black;
    }
    return 'inherit';
  };

  const shouldOpenModal = isSmallMobile && tournaments.length > 0;

  return (
    <>
      <Container
        key={`day-${day.toDateString()}`}
        style={{
          color: getDayTextColor(),
          backgroundColor: getDayColor(
            day,
            month.monthName,
            month.shouldGreyOut,
          ),
          cursor: shouldOpenModal ? 'pointer' : 'default',
        }}
        onClick={shouldOpenModal ? openModal : undefined}
      >
        {day.getDate()}
        <TournamentCirclesContainer>
          {tournaments.map((tournament) => (
            <TournamentCircle
              key={`calendar-${tournament.name}-${tournament.town}`}
              title={tournament.name}
              border={
                TournamentColorByType[
                  tournament.tournamentType as TournamentType
                ]
              }
            />
          ))}
        </TournamentCirclesContainer>
      </Container>
      {tournaments.length > 0 && (
        <Dialog>
          <TournamentsList>
            {tournaments.map((tournament) => (
              <Tournament
                key={`${tournament.name}-${tournament.town}`}
                name={tournament.name}
                type={tournament.tournamentType}
                town={tournament.town}
                startDate={new Date(tournament.startDate)}
                endDate={new Date(tournament.endDate)}
                maxWidth='100%'
                metrixId={tournament.metrixId}
              />
            ))}
          </TournamentsList>
        </Dialog>
      )}
    </>
  );
};

export default CalendarDay;
