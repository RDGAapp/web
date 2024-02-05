import SportsCategory from "enums/sportsCategory";

export interface IPlayer {
  name: string;
  surname: string | null;
  rdgaNumber: number;
  rdgaRating: number | null;
  rdgaRatingChange: number | null;
  town: string | null;
  email: string | null;
  pdgaNumber: number | null;
  metrixNumber: number | null;
  metrixRating: number | null;
  priority: number;
  activeTo: string;
  sportsCategory: SportsCategory | null;
}
export interface IPlayerExtended extends IPlayer {
  metrixRating: number | null;
  metrixRatingChange: number | null;
  pdgaRating: number | null;
  pdgaActiveTo: string | null;
}
