import TournamentType from 'enums/tournamentType';

const TournamentNameByType: Record<TournamentType, string> = {
  [TournamentType.RussianChampionship]: 'Чемпионат России',
  [TournamentType.AllStar]: 'Матч Всех Звезд',
  [TournamentType.National]: 'Национальный тур',
  [TournamentType.Pro]: 'Про тур',
  [TournamentType.Federal]: 'Федеральный турнир',
  [TournamentType.Regional]: 'Региональный турнир',
  [TournamentType.League]: 'Региональная лига',
  [TournamentType.BagTag]: 'Bag-tag',
};

export default TournamentNameByType;
