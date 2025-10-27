import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FTUEContextType {
  isFirstTimeUser: boolean;
  ftueCompleted: boolean;
  questsFeedVisited: boolean;
  questsFeedFtueCompleted: boolean;
  profileFtueCompleted: boolean;
  setIsFirstTimeUser: (value: boolean) => void;
  setFtueCompleted: (value: boolean) => void;
  setQuestsFeedVisited: (value: boolean) => void;
  setQuestsFeedFtueCompleted: (value: boolean) => void;
  setProfileFtueCompleted: (value: boolean) => void;
}

const FTUEContext = createContext<FTUEContextType | undefined>(undefined);

export const FTUEProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [ftueCompleted, setFtueCompleted] = useState(false);
  const [questsFeedVisited, setQuestsFeedVisited] = useState(false);
  const [questsFeedFtueCompleted, setQuestsFeedFtueCompleted] = useState(false);
  const [profileFtueCompleted, setProfileFtueCompleted] = useState(false);

  return (
    <FTUEContext.Provider
      value={{
        isFirstTimeUser,
        ftueCompleted,
        questsFeedVisited,
        questsFeedFtueCompleted,
        profileFtueCompleted,
        setIsFirstTimeUser,
        setFtueCompleted,
        setQuestsFeedVisited,
        setQuestsFeedFtueCompleted,
        setProfileFtueCompleted,
      }}
    >
      {children}
    </FTUEContext.Provider>
  );
};

export const useFTUE = () => {
  const context = useContext(FTUEContext);
  if (context === undefined) {
    throw new Error('useFTUE must be used within a FTUEProvider');
  }
  return context;
};

