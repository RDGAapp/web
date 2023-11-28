import { createContext, useState, useMemo } from 'react';

export const TownContext = createContext<TownContext>({
  town: null,
  changeTown: () => {},
});

export const TownProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [town, setTown] = useState<Town>(localStorage.getItem('town') as Town);

  const changeTown = (newTown: Town) => {
    localStorage.setItem('town', newTown);
    setTown(newTown);
  };

  const townContextValue = useMemo(() => ({ town, changeTown }), [town]);

  return (
    <TownContext.Provider value={townContextValue}>
      {children}
    </TownContext.Provider>
  );
};
