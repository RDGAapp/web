interface TownContext {
  town: Town | null;
  changeTown: ((newTown: Town) => void) | (() => void);
}
