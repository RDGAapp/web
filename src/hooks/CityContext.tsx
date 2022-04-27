import {
  createContext, useState, useMemo,
} from 'react';

function getCity(): string | null {
  return localStorage.getItem('city');
}

export const CityContext = createContext<CityContext>({
  city: getCity(),
  changeCity: () => { /* empty function */ },
});

export const CityProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const [city, setCity] = useState(getCity());

  const changeCity = (newCity: string) => {
    localStorage.setItem('city', newCity);
    setCity(newCity);
  };

  const cityContextValue = useMemo(() => ({ city, changeCity }), [city]);

  return (
    <CityContext.Provider value={cityContextValue}>
      {children}
    </CityContext.Provider>
  );
};
