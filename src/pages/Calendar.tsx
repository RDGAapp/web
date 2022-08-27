import { useMemo } from 'react';

import styled from 'styled-components';

import PageHeader from 'components/PageHeader';
import { getCalendarData, getMonthName } from 'helpers/dateHelpers';
import theme from 'helpers/theme';
import { useAppSelector } from 'store/hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr;
  gap: 1rem;
`;

const MonthName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 5rem;
`;

const CalendarRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

const MonthCalendar = styled.div`
  display: grid;
  gap: 1rem;
`;

const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2px;
`;

const CalendarDay = styled.div`
  height: 3rem;
  border: 1px solid #f3f3f3;
  border-radius: 0.5rem;
`;

const TournamentList = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
`;

const Tournament = styled.div`
  display: flex;
  flex: 1;
  height: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  :hover {
    min-width: min-content;
  }
`;

const Calendar = () => {
  const tournaments = useAppSelector((state) => state.tournament.tournaments);

  const calendarData = useMemo(getCalendarData, []);

  const getDayColor = (day: Date, monthName: string, shouldGreyOut: boolean) => {
    const tournamentsForThisDay = tournaments.filter((tournament) => {
      const tournamentStartDay = new Date(tournament.startDate);
      tournamentStartDay.setHours(0, 0, 0, 0);
      const tournamentEndDay = new Date(tournament.endDate);
      tournamentEndDay.setHours(0, 0, 0, 0);

      const dayStart = new Date(day);
      dayStart.setHours(0, 0, 0, 0);

      return tournamentStartDay <= dayStart && tournamentEndDay >= dayStart;
    });

    if (tournamentsForThisDay.length !== 0) {
      return theme.colors.primary;
    }
    if (getMonthName(day) === monthName) {
      return shouldGreyOut ? '#eaeaea' : 'white';
    }
    return shouldGreyOut ? 'white' : '#eaeaea';
  };

  return (
    <>
      <PageHeader text="Календарь турниров" />
      <Container>
        {calendarData.map((month) => (
          <Month key={month.monthName}>
            <MonthName>{month.monthName}</MonthName>
            <MonthCalendar>
              {month.weeks.map((week) => (
                <CalendarRow key={`week-${week[0].toDateString()}`}>
                  <CalendarWeek>
                    {week.map((day) => (
                      <CalendarDay
                        key={`day-${day.toDateString()}`}
                        style={{
                          backgroundColor: getDayColor(day, month.monthName, month.shouldGreyOut),
                        }}
                      >
                        {day.getDate()}
                      </CalendarDay>
                    ))}
                  </CalendarWeek>
                  <TournamentList>
                    {tournaments
                      .filter(
                        (tournament) => (tournament.startDate >= week[0]
                          && tournament.startDate <= week[6])
                        || (tournament.endDate >= week[0] && tournament.endDate <= week[6]),
                      )
                      .map((tournament) => (
                        <Tournament key={tournament.name}>
                          {tournament.name}
                        </Tournament>
                      ))}
                  </TournamentList>
                </CalendarRow>
              ))}
            </MonthCalendar>
          </Month>
        ))}
      </Container>
    </>
  );
};

export default Calendar;
