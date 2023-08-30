import Player from '@/constants/player';
import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/radix-ui/Popover"



interface Props {
  player: any;
  index: number
}

const LeaderboardItem = ({player, index}:Props) => {
  const randomAvatar =`https://source.boringavatars.com/beam/50/${player.name.split(" ")[0]}%20${player.name.split(" ")[1]}?colors=582770,773D94,943D8A,C22760,E81764`
  return (
      <Popover>
        <div className="flex items-center p-4 text-light-2 cursor-pointer mt-1 pl-0">
          <div className='grid content-center bg-gradient-to-tl from-violet-500 to-fuchsia-500 w-10 lg:w-14 h-8 rounded-l-full pl-0 lg:pl-2 -mr-3.5 lg:-mr-4 '>
            <div className='w-8 flex justify-center text-center'>
              <p className='text-light-2 text-subtle-semibold lg:text-base-semibold'>{index+1}</p>
            </div>
          </div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 mr-4">
            <img src={player.profileImage ? player.profileImage : randomAvatar} alt={`Avatar of ${player.name}`} className="w-full h-full rounded-full border-2 border-fuchsia-400" />
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
