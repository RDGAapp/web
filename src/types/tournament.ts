import TournamentType from 'enums/tournamentType';

export interface ITournament {
  code: string;
  name: string;
  startDate: string;
  endDate: string;
  tournamentType: TournamentType;
  town: string;
  metrixId: string | null;
}
