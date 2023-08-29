import Player from '@/constants/player';
import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/radix-ui/Popover"



interface Props {
  player: any;
}

const LeaderboardItem = ({player}:Props) => {
  const randomAvatar =`https://source.boringavatars.com/beam/50/${player.name.split(" ")[0]}%20${player.name.split(" ")[1]}?colors=582770,773D94,943D8A,C22760,E81764`
  return (
      <Popover>
        <div className="flex items-center p-4 text-light-2 cursor-pointer mt-1">
        <div className="w-12 h-12 mr-4">
            <img src={player.profileImage ? player.profileImage : randomAvatar} alt={`Avatar of ${player.name}`} className="w-full h-full rounded-full" />
        </div>
        <div className="flex-grow gap-1">
        
            <PopoverTrigger>
                <p className="text-lg font-semibold">{player.name}</p>
                <p className='text-subtle-semibold text-left'>{player.steps}</p>
            </PopoverTrigger>
            <PopoverContent>
                <div className='bg-white w-full h-40'>

                </div>

            </PopoverContent>
        
        </div>
        <div className="flex flex-row gap-2">
            
            <p className='text-base-semibold'>{player.points}</p>
        </div>
            

        </div>
      </Popover>

  );
};

export default LeaderboardItem;
