import { useMemo, CSSProperties } from 'react';

import Tournament from 'components/Tournament';
import { getMonthName, spellMonth } from 'helpers/dateHelpers';
import TournamentColorByType from 'helpers/tournament/typeColorByType';
import useDialog from 'hooks/useDialog';
import useMatchMedia from 'hooks/useMatchMedia';
import { useAppSelector } from 'store/hooks';
import { TournamentType } from 'types/db';

import styles from './styles.module.css';

interface Props {
  day: Date;
  month: { monthName: string; shouldGreyOut: boolean };
}

const CalendarDay = ({ day, month }: Props) => {
  const { isSmallMobile } = useMatchMedia();

  const { tournaments: allTournaments } = useAppSelector(
    (state) => state.tournament,
  );

  const { Dialog, openModal } = useDialog({
    headerText: `Турниры ${day.getDate()} ${spellMonth(day.getMonth())}`,
  });

  const tournaments = useMemo(
    () =>
      allTournaments.filter((tournament) => {
        const tournamentStartDay = new Date(tournament.startDate);
        tournamentStartDay.setHours(0, 0, 0, 0);
        const tournamentEndDay = new Date(tournament.endDate);
        tournamentEndDay.setHours(0, 0, 0, 0);

        const dayStart = new Date(day);
        dayStart.setHours(0, 0, 0, 0);

        return tournamentStartDay <= dayStart && tournamentEndDay >= dayStart;
      }),
    [allTournaments, day],
  );

  const getDayColor = (
    day: Date,
    monthName: string,
    shouldGreyOut: boolean,
  ) => {
    if (tournaments.length !== 0) {
      return 'var(--color-primary)';
    }
    if (getMonthName(day) === monthName) {
      return shouldGreyOut ? 'var(--color-background-lighter)' : 'inherit';
    }
    return shouldGreyOut ? 'inherit' : 'var(--color-background-lighter)';
  };

  const shouldOpenModal = isSmallMobile && tournaments.length > 0;

  return (
    <>
      <div
        key={`day-${day.toDateString()}`}
        className={styles.container}
        style={{
          color: tournaments.length === 0 ? 'inherit' : 'var(--color-black)',
          backgroundColor: getDayColor(
            day,
            month.monthName,
            month.shouldGreyOut,
          ),
          cursor: shouldOpenModal ? 'pointer' : 'default',
        }}
        role='button'
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={shouldOpenModal ? openModal : undefined}
      >
        {day.getDate()}
        <div className={styles['tournament-circles']}>
          {tournaments.map((tournament) => (
            <div
              key={`calendar-${tournament.name}-${tournament.town}`}
              title={tournament.name}
              style={
                {
                  '--tournament-color':
                    TournamentColorByType[
                      tournament.tournamentType as TournamentType
                    ],
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
      {tournaments.length > 0 && (
        <Dialog>
          <div className={styles['tournament-list']}>
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
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CalendarDay;
