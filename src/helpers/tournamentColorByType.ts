import TournamentType from 'enums/tournamentType';

const TournamentColorByType: Record<TournamentType, string> = {
  [TournamentType.RussianChampionship]: '#FD9F34',
  [TournamentType.AllStar]: '#fff',
  [TournamentType.National]: '#e94560',
  [TournamentType.Pro]: '#e94560',
  [TournamentType.Federal]: '#2a74ed',
  [TournamentType.Regional]: '#803A93',
  [TournamentType.League]: '#4e9f3d',
  [TournamentType.BagTag]: '#000',
};

export default TournamentColorByType;
