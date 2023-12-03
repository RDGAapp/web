import Tournament from 'components/Tournament';

interface IPreview {
  tournament: Tournament;
}

const Preview = ({ tournament }: IPreview) => (
  <Tournament
    name={tournament.name}
    type={tournament.tournamentType}
    town={tournament.town}
    startDate={new Date(tournament.startDate)}
    endDate={new Date(tournament.endDate)}
    maxWidth='100%'
  />
);

export default Preview;
