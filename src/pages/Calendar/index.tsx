import { useCallback, useEffect, useMemo } from 'react';

import styled from 'styled-components';

import { ReactComponent as InfoSvg } from 'assets/icons/info.svg';
import CalendarDay from 'components/CalendarDay';
import LogoLoader from 'components/LogoLoader';
import PageHeader from 'components/PageHeader';
import Tournament from 'components/Tournament';
import TournamentType from 'enums/tournamentType';
import { getCalendarData } from 'helpers/dateHelpers';
import TournamentColorByType from 'helpers/tournamentColorByType';
import useDialog from 'hooks/useDialog';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getTournaments } from 'store/tournaments/thunk';

import AccreditationDialog from './AccreditationDialog';

const PreContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const AccreditationButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`;

const Legend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  align-items: center;
  width: max-content;
  max-width: calc(100% - 3rem);
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const LegendItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
  }
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

const TournamentCircle = styled.div<{ $border: string }>`
  height: 0.5rem;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.$border};
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 100vh;
`;

const Calendar = () => {
  const dispatch = useAppDispatch();

  const { tournaments, loading } = useAppSelector((state) => state.tournament);

  const calendarData = useMemo(getCalendarData, []);

  const { Dialog: DialogAccreditation, openModal: openModalAccreditation } =
    useDialog({ headerText: 'Аккредитовать свой турнир' });

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
    [tournaments],
  );

  return (
    <>
      <PageHeader text='Календарь турниров' />
      {loading ? (
        <LogoLoader />
      ) : (
        <>
          <PreContent>
            <AccreditationButton type='button' onClick={openModalAccreditation}>
              <InfoSvg height={20} />
              Как аккредитовать турнир?
            </AccreditationButton>
            <Legend>
              <LegendItem>
                <TournamentCircle
                  $border={
                    TournamentColorByType[TournamentType.RussianChampionship]
                  }
                />
                Чемпионат России
              </LegendItem>
              <LegendItem>
                <TournamentCircle
                  $border={TournamentColorByType[TournamentType.Pro]}
                />
                Этап Про Тура
              </LegendItem>
              <LegendItem>
                <TournamentCircle
                  $border={TournamentColorByType[TournamentType.Federal]}
                />
                Федеральный Турнир
              </LegendItem>
              <LegendItem>
                <TournamentCircle
                  $border={TournamentColorByType[TournamentType.League]}
                />
                Этап региональной лиги
              </LegendItem>
            </Legend>
          </PreContent>
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
                                new Date(tournament.endDate) >= week[6]),
                          )
                          .map((tournament) => (
                            <Tournament
                              key={`${tournament.name}-${tournament.town}`}
                              name={tournament.name}
                              type={tournament.tournamentType}
                              town={tournament.town}
                              startDate={new Date(tournament.startDate)}
                              endDate={new Date(tournament.endDate)}
                              metrixId={tournament.metrixId}
                            />
                          ))}
                      </TournamentList>
                    </CalendarRow>
                  ))}
                </MonthCalendar>
              </Month>
            ))}
          </Container>
          <DialogAccreditation>
            <AccreditationDialog />
          </DialogAccreditation>
        </>
      )}
    </>
  );
};

export default Calendar;
