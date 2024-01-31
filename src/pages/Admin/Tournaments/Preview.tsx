import Tournament from 'components/Tournament';
import { ITournament } from 'types/tournament';

interface IPreview {
  tournament: ITournament;
}

const Preview = ({ tournament }: IPreview) => (
  <Tournament
    name={tournament.name}
    type={tournament.tournamentType}
    town={tournament.town}
    startDate={new Date(tournament.startDate)}
    endDate={new Date(tournament.endDate)}
    maxWidth='100%'
    metrixId={tournament.metrixId}
  />
);

export default Preview;
