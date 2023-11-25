import { ReactElement, createContext, useMemo, useState } from 'react';

import Role from 'enums/roles';

export const AppSettingsContext = createContext<{
  roles: Role[];
  addRoles: (value: Role[]) => void;
  removeRole: (value: Role) => void;
  removeAllRoles: () => void;
}>({
  roles: [],
  addRoles: () => {},
  removeRole: () => {},
  removeAllRoles: () => {},
});

interface IAppSettingsProviderProps {
  children: ReactElement;
}

const updateRoles = (newRoles: Role[]) => {
  localStorage.setItem('appSettings', JSON.stringify({ roles: newRoles }));
  return newRoles;
};

const AppSettingsProvider = ({ children }: IAppSettingsProviderProps) => {
  const [roles, setRoles] = useState<Role[]>(
    JSON.parse(localStorage.getItem('appSettings') || '{}').roles ?? []
  );

  const contextValue = useMemo(
    () => ({
      roles,
      addRoles: (newRoles: Role[]) =>
        setRoles((value) => updateRoles([...value, ...newRoles])),
      removeRole: (roleToRemove: Role) =>
        setRoles((value) =>
          updateRoles(value.filter((role) => role !== roleToRemove))
        ),
      removeAllRoles: () => updateRoles([]),
    }),
    [roles]
  );

  return (
    <AppSettingsContext.Provider value={contextValue}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;
