import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

import Role from 'enums/roles';

const defaultFeatureFlags = {
  telegramLogin: false,
};

type TFeatureFlag = keyof typeof defaultFeatureFlags;

export const AppSettingsContext = createContext<{
  roles: Set<Role>;
  addRoles: (value: Role[]) => void;
  removeRole: (value: Role) => void;
  removeAllRoles: () => void;
  theme: 'light' | 'dark';
  featureFlags: typeof defaultFeatureFlags;
  toggleFeatureFlag: (value: TFeatureFlag) => void;
}>({
  roles: new Set(),
  addRoles: () => {},
  removeRole: () => {},
  removeAllRoles: () => {},
  theme: 'light',
  featureFlags: defaultFeatureFlags,
  toggleFeatureFlag: () => {},
});

interface IAppSettingsProviderProps {
  children: ReactNode;
}

const getCurrentAppSettings = (): {
  roles: Role[];
  featureFlags: typeof defaultFeatureFlags;
} | null => {
  const current = localStorage.getItem('appSettings');
  try {
    return current ? JSON.parse(current) : null;
  } catch (error) {
    return null;
  }
};

const updateRoles = (newRoles: Role[]) => {
  const current = getCurrentAppSettings();

  localStorage.setItem(
    'appSettings',
    JSON.stringify({ ...current, roles: newRoles }),
  );
  return new Set(newRoles);
};

const toggleFeatureFlags = (featureFlagName: TFeatureFlag) => {
  const current = getCurrentAppSettings();

  const newFeatureFlags = {
    ...current?.featureFlags,
    [featureFlagName]: !current?.featureFlags?.[featureFlagName] ?? true,
  };

  localStorage.setItem(
    'appSettings',
    JSON.stringify({
      ...current,
      featureFlags: newFeatureFlags,
    }),
  );
  return newFeatureFlags;
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
  const [featureFlags, setFeatureFlags] = useState(
    JSON.parse(localStorage.getItem('appSettings') || '{}').featureFlags ??
      defaultFeatureFlags,
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
      featureFlags,
      toggleFeatureFlag: (value: TFeatureFlag) =>
        setFeatureFlags(toggleFeatureFlags(value)),
    }),
    [roles, theme, featureFlags],
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
