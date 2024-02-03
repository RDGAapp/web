export interface IPlayer {
  name: string;
  surname: string | null;
  rdgaNumber: number;
  rdgaRating: number | null;
  rdgaRatingChange: number | null;
  town: string | null;
  email: string | null;
  pdgaNumber: number | null;
  pdgaRating: number | null;
  metrixNumber: number | null;
  metrixRating: number | null;
  priority: number;
  activeTo: string | null;
}
