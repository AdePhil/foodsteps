import { createContext, ReactNode, useContext, useState } from "react";

type ActiveUserType = {
  activeUser: number | null;
  setActiveUser: (id: number) => void;
};

const DEFAULT_USER_ID = 1;
export const UserContext = createContext<ActiveUserType | null>(null);

export const ActiveUserProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState<number | null>(DEFAULT_USER_ID);

  return (
    <UserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useActiveUser = (): ActiveUserType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useActiveUser must be used within a UserProvider");
  }

  return context;
};
