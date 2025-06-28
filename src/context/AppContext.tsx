import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

// Use 'object' as a placeholder until context types are defined
type AppContextType = object;

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    // Context values will be added here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};