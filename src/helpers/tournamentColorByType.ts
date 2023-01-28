import TournamentType from 'enums/tournamentType';

const TournamentColorByType: Record<TournamentType, string> = {
  [TournamentType.RussianChampionship]: '#FD9F34',
  [TournamentType.AllStar]: '#2a74ed',
  [TournamentType.National]: '#e94560',
  [TournamentType.Federal]: '#000000',
  [TournamentType.Regional]: '#803A93',
  [TournamentType.League]: '#4e9f3d',
  [TournamentType.BagTag]: '#fff',
};

export default TournamentColorByType;
