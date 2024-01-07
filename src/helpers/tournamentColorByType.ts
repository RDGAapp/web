import TournamentType from 'enums/tournamentType';

const TournamentColorByType: Record<TournamentType, string> = {
  [TournamentType.RussianChampionship]: 'hsl(32, 98%, 60%)',
  [TournamentType.AllStar]: 'hsl(0, 0%, 100%)',
  [TournamentType.National]: 'hsl(350, 79%, 59%)',
  [TournamentType.Pro]: 'hsl(350, 79%, 59%)',
  [TournamentType.Federal]: 'hsl(217, 84%, 55%)',
  [TournamentType.Regional]: 'hsl(287, 43%, 40%)',
  [TournamentType.League]: 'hsl(110, 45%, 43%)',
  [TournamentType.BagTag]: 'hsl(0, 0%, 0%)',
};

export default TournamentColorByType;
