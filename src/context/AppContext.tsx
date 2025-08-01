import { createContext, useContext, useState, ReactNode } from "react";
interface AppContextType {
  user: any;
  setUser: (user: any) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<any>(null);

  const value: AppContextType = { user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
