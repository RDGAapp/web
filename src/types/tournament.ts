import { Tournament } from './db';

export interface ITournament {
  code: Tournament['code'];
  name: Tournament['name'];
  startDate: string;
  endDate: string;
  tournamentType: Tournament['tournament_type'];
  town: Tournament['town'];
  metrixId: Tournament['metrix_id'];
}
