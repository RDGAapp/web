import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import Tournament from 'components/Tournament';
import TournamentType from 'enums/tournamentType';
import { getMonthName, spellMonth } from 'helpers/dateHelpers';
import theme from 'helpers/theme';
import TournamentColorByType from 'helpers/tournamentColorByType';
import useDialog from 'hooks/useDialog';
import useMatchMedia from 'hooks/useMatchMedia';

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.2rem 0.3rem;
  border: 1px solid #f3f3f3;
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
  height: 0.5rem;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.border};
  border-radius: 100vh;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TournamentsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  * {
    flex-basis: max-content;
  }
`;

interface Props {
  day: Date;
  month: { monthName: string, shouldGreyOut: boolean };
  tournaments: Tournament[];
}

const CalendarDay = ({ day, month, tournaments }: Props) => {
  const { isSmallMobile } = useMatchMedia();

  const { Dialog, openModal, closeModal } = useDialog();

  const getDayColor = (day: Date, monthName: string, shouldGreyOut: boolean) => {
    if (tournaments.length !== 0) {
      return theme.colors.primary;
    }
    if (getMonthName(day) === monthName) {
      return shouldGreyOut ? '#eaeaea' : 'white';
    }
    return shouldGreyOut ? 'white' : '#eaeaea';
  };

  return (
    <Container
      key={`day-${day.toDateString()}`}
      style={{
        backgroundColor: getDayColor(day, month.monthName, month.shouldGreyOut),
      }}
      onClick={isSmallMobile ? openModal : () => { /* do nothing */ }}
    >
      {day.getDate()}
      <TournamentCirclesContainer>
        {tournaments
          .map((tournament) => (
            <TournamentCircle
              key={`calendar-${tournament.name}-${tournament.town}`}
              title={tournament.name}
              border={TournamentColorByType[tournament.type as TournamentType]}
            />
          ))}
      </TournamentCirclesContainer>
      <Dialog>
        <Header>
          {`Турниры ${day.getDate()} ${spellMonth(day.getMonth())}`}
          <CrossSvg height={17} onClick={closeModal} />
        </Header>
        <TournamentsList>
          {tournaments.map((tournament) => (
            <Tournament
              key={`${tournament.name}-${tournament.town}`}
              name={tournament.name}
              type={tournament.type}
              town={tournament.town}
              startDate={tournament.startDate}
              endDate={tournament.endDate}
            />
          ))}
        </TournamentsList>
      </Dialog>
    </Container>
  );
};

export default CalendarDay;
