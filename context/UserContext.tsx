// context/LeaderboardContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TeamData {
  _id: string;
  name: string;
  steps: number;
  points: number;
}

interface UserData {
  id: string;
  name: string;
  steps: number;
  points: number;
  gender: string;
}

interface LeaderboardContextType {
  teams: TeamData[] | null;
  allPlayers: UserData[] | null;
  updateTeamsOptimistically: (updatedTeams: TeamData[]) => void;
  updateAllPlayersOptimistically: (updatedAllPlayers: UserData[]) => void;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(undefined);

export const LeaderboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [teams, setTeams] = useState<TeamData[] | null>(null);
  const [allPlayers, setAllPlayers] = useState<UserData[] | null>(null);

  const updateTeamsOptimistically = (updatedTeams: TeamData[]) => {
    setTeams([...(teams || []), ...updatedTeams]);
  };

  const updateAllPlayersOptimistically = (updatedAllPlayers: UserData[]) => {
    setAllPlayers(updatedAllPlayers);
  };

  return (
    <LeaderboardContext.Provider
      value={{
        teams,
        allPlayers,
        updateTeamsOptimistically,
        updateAllPlayersOptimistically,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export const useLeaderboardContext = () => {
  const context = useContext(LeaderboardContext);
  if (!context) {
    throw new Error('useLeaderboardContext must be used within LeaderboardProvider');
  }
  return context;
};
