import { useCallback, useEffect, useMemo } from 'react';

import styled from 'styled-components';

import CalendarDay from 'components/CalendarDay';
import PageHeader from 'components/PageHeader';
import Tournament from 'components/Tournament';
import TournamentType from 'enums/tournamentType';
import { getCalendarData } from 'helpers/dateHelpers';
import TournamentColorByType from 'helpers/tournamentColorByType';
import Loading from 'pages/Loading';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getTournaments } from 'store/tournaments/thunk';

const Legend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  align-items: center;
  width: calc(100% - 3rem);
  margin: 0 0 1rem;
  padding: 1rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const LegendItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

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

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const MonthName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 5rem;
  font-weight: 700;
`;

const CalendarRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  ${({ theme }) => theme.media.smallMobile} {
    grid-template-columns: 1fr;
  }
`;

const MonthCalendar = styled.div`
  display: grid;
  gap: 1rem;
`;

const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.1rem;
`;

const TournamentList = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;

  ${({ theme }) => theme.media.smallMobile} {
    display: none;
  }
`;

const TournamentCircle = styled.div<{ border: string }>`
  height: 0.5rem;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.border};
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 100vh;
`;

const Calendar = () => {
  const dispatch = useAppDispatch();

  const { tournaments, loading } = useAppSelector((state) => state.tournament);

  const calendarData = useMemo(getCalendarData, []);

  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  const getTournamentsForThisDay = useCallback(
    (day: Date) =>
      tournaments.filter((tournament) => {
        const tournamentStartDay = new Date(tournament.startDate);
        tournamentStartDay.setHours(0, 0, 0, 0);
        const tournamentEndDay = new Date(tournament.endDate);
        tournamentEndDay.setHours(0, 0, 0, 0);

        const dayStart = new Date(day);
        dayStart.setHours(0, 0, 0, 0);

        return tournamentStartDay <= dayStart && tournamentEndDay >= dayStart;
      }),
    [tournaments]
  );

  return (
    <>
      <PageHeader text='Календарь турниров' />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Legend>
            <LegendItem>
              <TournamentCircle
                border={
                  TournamentColorByType[TournamentType.RussianChampionship]
                }
              />
              Чемпионат России
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.AllStar]}
              />
              Матч Всех Звезд
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.National]}
              />
              Национальный Тур
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.Federal]}
              />
              Федеральный Турнир
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.Regional]}
              />
              Региональный Турнир
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.League]}
              />
              Этап региональной лиги
            </LegendItem>
            <LegendItem>
              <TournamentCircle
                border={TournamentColorByType[TournamentType.BagTag]}
              />
              Bag Tag Challenge
            </LegendItem>
          </Legend>
          <Container>
            {calendarData.map((month) => (
              <Month key={`month-${month.weeks[0][0].toDateString()}`}>
                <MonthName>{month.monthName}</MonthName>
                <MonthCalendar>
                  {month.weeks.map((week) => (
                    <CalendarRow key={`week-${week[0].toDateString()}`}>
                      <CalendarWeek>
                        {week.map((day) => (
                          <CalendarDay
                            key={`day-${day.toDateString()}`}
                            day={day}
                            month={month}
                            tournaments={getTournamentsForThisDay(day)}
                          />
                        ))}
                      </CalendarWeek>
                      <TournamentList>
                        {tournaments
                          .filter(
                            (tournament) =>
                              (new Date(tournament.startDate) >= week[0] &&
                                new Date(tournament.startDate) <= week[6]) ||
                              (new Date(tournament.endDate) >= week[0] &&
                                new Date(tournament.endDate) <= week[6]) ||
                              (new Date(tournament.startDate) <= week[0] &&
                                new Date(tournament.endDate) >= week[6])
                          )
                          .map((tournament) => (
                            <Tournament
                              key={`${tournament.name}-${tournament.town}`}
                              name={tournament.name}
                              type={tournament.tournamentType}
                              town={tournament.town}
                              startDate={new Date(tournament.startDate)}
                              endDate={new Date(tournament.endDate)}
                            />
                          ))}
                      </TournamentList>
                    </CalendarRow>
                  ))}
                </MonthCalendar>
              </Month>
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Calendar;
