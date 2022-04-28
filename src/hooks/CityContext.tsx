import {
  createContext, useState, useMemo,
} from 'react';

export const CityContext = createContext<CityContext>({
  city: null,
  changeCity: () => { /* empty function */ },
});

export const CityProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const [city, setCity] = useState(localStorage.getItem('city'));

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
