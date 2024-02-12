import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Role from 'enums/roles';

export const AppSettingsContext = createContext<{
  roles: Set<Role>;
  addRoles: (value: Role[]) => void;
  removeRole: (value: Role) => void;
  removeAllRoles: () => void;
  theme: 'light' | 'dark';
}>({
  roles: new Set(),
  addRoles: () => {},
  removeRole: () => {},
  removeAllRoles: () => {},
  theme: 'light',
});

interface IAppSettingsProviderProps {
  children: ReactNode;
}

const updateRoles = (newRoles: Role[]) => {
  localStorage.setItem('appSettings', JSON.stringify({ roles: newRoles }));
  return new Set(newRoles);
};

const colorSchemeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

const getPreferredColorScheme = () => {
  if (colorSchemeMatchMedia.matches) {
    return 'dark';
  }
  return 'light';
};

const AppSettingsProvider = ({ children }: IAppSettingsProviderProps) => {
  const [roles, setRoles] = useState<Set<Role>>(
    new Set(
      JSON.parse(localStorage.getItem('appSettings') || '{}').roles ?? [],
    ),
  );
  const [theme, setTheme] = useState<'light' | 'dark'>(
    getPreferredColorScheme(),
  );

  const contextValue = useMemo(
    () => ({
      roles,
      theme,
      addRoles: (newRoles: Role[]) =>
        setRoles((value) => updateRoles([...value, ...newRoles])),
      removeRole: (roleToRemove: Role) =>
        setRoles((value) => {
          value.delete(roleToRemove);
          return updateRoles([...value]);
        }),
      removeAllRoles: () => updateRoles([]),
    }),
    [roles, theme],
  );

  useEffect(() => {
    colorSchemeMatchMedia.addEventListener('change', () =>
      setTheme(getPreferredColorScheme()),
    );

    return () =>
      colorSchemeMatchMedia.removeEventListener('change', () =>
        setTheme(getPreferredColorScheme()),
      );
  }, []);

  return (
    <AppSettingsContext.Provider value={contextValue}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;
