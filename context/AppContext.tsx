"use client"
import { fetchAll } from '@/lib/actions/user.actions';
import { useClerk } from '@clerk/nextjs';
// context/AppContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserData {
  id: string;
  name: string;
  steps: number;
  points: number;
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
  malePlayers: UserData[] | null;
  femalePlayers: UserData[] | null;
  updateSteps: (steps: number) => void;
  errorState: string | null;
  competition: Copmpetition | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [teams, setTeams] = useState<TeamData[] | null>(null);
  const [allPlayers, setAllPlayers] = useState<UserData[] | null>(null);
  const [malePlayers, setMalePlayers] = useState<UserData[] | null>(null);
  const [femalePlayers, setFemalePlayers] = useState<UserData[] | null>(null);
  const [errorState, setErrorState] = useState<string | null>(null); // Add error state
  const [competition, setCompetition] = useState<Copmpetition | null>(null);

  // Fetch user and teams data on login
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user and teams data from API
        // Set the fetched data using setUser and setTeams
        const fetchDataAndSetContext = async () => {
            try {
                if(!teams || !allPlayers || !malePlayers || !femalePlayers || !competition){
                    const {teams,femalePlayers,malePlayers, allPlayers} = await fetchAll();
                    setCompetition({
                        numberOfPlayers: allPlayers.length,
                        numberOfTeams: teams.length
                    });

                    // if(user.error){
                    //     setErrorState(user.message);
                    //     console.log(errorState);
                    //     console.log(user);
                        
                    // }
                    // setUser({
                    //     id: loggedInEmail,
                    //     name: user.name,
                    //     steps: user.steps,
                    //     points: user.points
                    // });

                    //console.log(user);

                    setTeams(teams);


                    setAllPlayers(allPlayers);


                    setFemalePlayers(femalePlayers);


                    setMalePlayers(malePlayers);




                    console.log("teamsData", teams);
                    console.log("femalePlayersData", femalePlayers);
                    console.log("malePlayersData", malePlayers);
                    console.log("allPlayers", allPlayers);
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
    <AppContext.Provider value={{ user, teams, updateSteps, allPlayers, malePlayers, femalePlayers, errorState, competition }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
