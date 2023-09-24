import Player from '@/constants/player';
import React, {useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/radix-ui/Accordion"
import { apiURLs } from '@/constants';




interface Props {
  player: any,
  index: number,
  isTeam: boolean
}

const LeaderboardItem = ({player, index, isTeam}:Props) => {

  const [totalSteps, setTotalSteps] = useState([{}]);
  const [teamMembers, setTeamMembers] = useState([{}]);

  async function getPlayerHistory(){
    try {
      const response = await fetch(`${apiURLs.getAnyPlayer}${player.id}`);

      if(!response.ok){
        return null;
      }
      const data = await response.json();
      const totalSteps = data.total_steps;
      return totalSteps;
    } catch (error) {
      return null;
    }
  }

  async function getTeamHistory(){
    try {
      const response = await fetch(`${apiURLs.getTeam}${player._id}`);

      if(!response.ok){
        return null;
      }
      const data = await response.json();
      const teamData = data;
      return teamData;
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(isTeam){
      getTeamHistory().then((teamData)=>{
        setTeamMembers(teamData);
      }
      )
    }
    else{
      getPlayerHistory().then((totalSteps)=>{
        setTotalSteps(totalSteps);
      }
      )
    }
  }
  , [])


  const randomAvatar =`https://source.boringavatars.com/beam/50/${player.name.split(" ")[0]}%20${player.name.split(" ")[1]}?colors=582770,773D94,943D8A,C22760,E81764`;
  return (
      <Accordion type="single" collapsible>
        
        <AccordionItem value={`item-1`}>
          

          
            <div className=" w-full flex items-center text-light-2 cursor-pointer mt-1 pl-0 justify-between">
              <div className=' flex flex-row '>
                <div className='flex flex-row items-center justify-center'>
                  <div className='grid content-center bg-gradient-to-tl from-violet-500 to-fuchsia-500 w-10 lg:w-14 h-8 rounded-l-full pl-0 lg:pl-2 -mr-3.5 lg:-mr-4 '>
                    <div className='w-8 flex justify-center text-center'>
                      <p className='text-light-2 text-subtle-semibold lg:text-base-semibold'>{index+1}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 mr-4">
                    <img src={player.profileImage ? player.profileImage : randomAvatar} alt={`Avatar of ${player.name}`} className="w-full h-full rounded-full border-2 border-fuchsia-400" />
                  </div>
                </div>
                <div className="">
                    <p className="text-lg font-semibold">{player.name}</p>
                    <p className='text-subtle-semibold text-left'>{player.steps}</p>
                </div>
              </div>
              <AccordionTrigger>
                <div className="">
                  <p className='text- text-body-semibold'>{player.points}</p>
                </div>
              </AccordionTrigger>
            </div>
          <AccordionContent>
            <div className='w-full'>
                <ul>
                  {
                    totalSteps.map((item:any,index)=>{
                      if(!item.date){
                        return null;
                      }
                      return(
                        <li key={index} className='flex flex-row justify-between pr-8 pl-8'>
                          <span className='text-light-2 text-subtle-medium'>{item.date.split("T")[0]}</span>
                          <span className='text-light-2 text-subtle-medium'>{item.steps}</span>
                        </li>
                      )
                    }
                    )
                  }
                </ul>
                <ul>
                  {
                    teamMembers.map((item:any, index)=>{
                      return(
                        <li key={index} className='flex flex-row justify-between pr-8 pl-8'>
                          <span className='text-light-2 text-subtle-medium'>{item.name}</span>
                          <span className='text-light-2 text-subtle-medium'>{item.steps}</span>
                        </li>
                      )
                    }
                    )
                  }
                </ul>
              
              
            </div>
            
          </AccordionContent>
          
        
        
        
        </AccordionItem>
        
        
            

      </Accordion>

  );
};

export default LeaderboardItem;
