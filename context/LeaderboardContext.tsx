"use client"
import { fetchAll } from '@/lib/actions/user.actions';
// context/AppContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserData {
  id: string;
  name: string;
  steps: number;
  points: number;
  gender: string;
  //stepsHistory: { date: string; steps: number }[];
}

interface TeamData {
  _id: string;
  name: string;
  steps: number;
  points: number;
  //players: PlayerData[];
}

interface Copmpetition{
    numberOfPlayers: number;
    numberOfTeams: number;
}

interface AppContextType {
  user: UserData | null;
  teams: TeamData[] | null;
  allPlayers: UserData[] | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const LeaderboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [teams, setTeams] = useState<TeamData[] | null>(null);
  const [allPlayers, setAllPlayers] = useState<UserData[] | null>(null);

  // Fetch user and teams data on login
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user and teams data from API
        // Set the fetched data using setUser and setTeams
        const fetchDataAndSetContext = async () => {
            try {
          
                if(!teams || !allPlayers){
                    const {updatedTeams, updatedAllPlayers} = await fetchAll();
                    setTeams(updatedTeams);
                    setAllPlayers(updatedAllPlayers);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndSetContext();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateSteps = (steps: number) => {
    // Update user's steps in the state and API
    // Update team's total steps and points if applicable
  };

  return (
    <AppContext.Provider value={{ user, teams, allPlayers}}>
      {children}
    </AppContext.Provider>
  );
};

export const useLeaderboardContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
