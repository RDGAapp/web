import TournamentType from 'enums/tournamentType';

const TournamentColorByType: Record<TournamentType, string> = {
  [TournamentType.National]: '#e94560',
  [TournamentType.AllStar]: '#2a74ed',
  [TournamentType.Regional]: '#542583',
  [TournamentType.League]: '#4e9f3d',
  [TournamentType.BagTag]: '#808080',
};

export default TournamentColorByType;
