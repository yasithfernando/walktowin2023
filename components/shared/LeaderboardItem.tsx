import Player from '@/constants/player';
import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/radix-ui/Popover"



interface LeaderboardItemProps {
  player: Player;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ player }) => {
  return (
      <Popover>
        <div className="flex items-center p-4 text-light-2 cursor-pointer mt-1">
        <div className="w-12 h-12 mr-4">
            <img src={player.profileImage} alt={`Avatar of ${player.name}`} className="w-full h-full rounded-full" />
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
            
            <p>{player.points}</p>
        </div>
            

        </div>
      </Popover>

  );
};

export default LeaderboardItem;
