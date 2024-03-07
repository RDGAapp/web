import SportsCategory from 'enums/sportsCategory';

export interface IBasePlayer {
  name: string;
  surname: string | null;
  rdgaNumber: number;
  rdgaRating: number | null;
  rdgaRatingChange: number | null;
  town: string | null;
  pdgaNumber: number | null;
  metrixNumber: number | null;
  activeTo: string;
  sportsCategory: SportsCategory | null;
}

export interface IPlayer extends IBasePlayer {
  avatarUrl: string | null;
}
export interface IPlayerExtended extends IPlayer {
  metrixRating: number | null;
  metrixRatingChange: number | null;
  pdgaRating: number | null;
  pdgaActiveTo: string | null;
}
