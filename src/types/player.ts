import { AuthData, Player } from './db';

export interface IBasePlayer {
  name: Player['name'];
  surname: Player['surname'];
  rdgaNumber: Player['rdga_number'];
  town: Player['town'];
  pdgaNumber: Player['pdga_number'];
  metrixNumber: Player['metrix_number'];
  activeTo: string;
  sportsCategory: Player['sports_category'];
}

export interface IPlayer extends IBasePlayer {
  avatarUrl: AuthData['telegram_photo_url'];
  rdgaRating: Player['rdga_rating'];
  rdgaRatingChange: Player['rdga_rating_change'];
}
export interface IPlayerExtended extends IPlayer {
  metrixRating: number | null;
  metrixRatingChange: number | null;
  pdgaRating: number | null;
  pdgaActiveTo: string | null;
  pdgaRatingChange: number | null;
}
