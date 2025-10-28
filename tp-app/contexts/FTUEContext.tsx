import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FTUEMode = 'normal' | 'ftue' | 'ftue-testing';

interface FTUEContextType {
  mode: FTUEMode;
  isFirstTimeUser: boolean;
  isFTUETesting: boolean;
  ftueCompleted: boolean;
  questsFeedVisited: boolean;
  questsFeedFtueCompleted: boolean;
  profileFtueCompleted: boolean;
  setMode: (value: FTUEMode) => void;
  setIsFirstTimeUser: (value: boolean) => void;
  setIsFTUETesting: (value: boolean) => void;
  setFtueCompleted: (value: boolean) => void;
  setQuestsFeedVisited: (value: boolean) => void;
  setQuestsFeedFtueCompleted: (value: boolean) => void;
  setProfileFtueCompleted: (value: boolean) => void;
}

const FTUEContext = createContext<FTUEContextType | undefined>(undefined);

export const FTUEProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<FTUEMode>('normal');
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [isFTUETesting, setIsFTUETesting] = useState(false);
  const [ftueCompleted, setFtueCompleted] = useState(false);
  const [questsFeedVisited, setQuestsFeedVisited] = useState(false);
  const [questsFeedFtueCompleted, setQuestsFeedFtueCompleted] = useState(false);
  const [profileFtueCompleted, setProfileFtueCompleted] = useState(false);

  return (
    <FTUEContext.Provider
      value={{
        mode,
        isFirstTimeUser,
        isFTUETesting,
        ftueCompleted,
        questsFeedVisited,
        questsFeedFtueCompleted,
        profileFtueCompleted,
        setMode,
        setIsFirstTimeUser,
        setIsFTUETesting,
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

