import { TournamentType } from 'types/db';

const TournamentColorByType: Record<TournamentType, string> = {
  [TournamentType.RussianChampionship]: 'oklch(78% 0.16 64deg)',
  [TournamentType.AllStar]: 'oklch(100%, 0 0deg)',
  [TournamentType.National]: 'oklch(63% 0.2 16deg)',
  [TournamentType.Pro]: 'oklch(63% 0.2 16deg)',
  [TournamentType.Federal]: 'oklch(59% 0.19 260deg)',
  [TournamentType.Regional]: 'oklch(48% 0.15 318deg)',
  [TournamentType.League]: 'oklch(63% 0.16 140deg)',
};

export default TournamentColorByType;
