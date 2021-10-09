import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

function LaunchCard({ launch }) {
   console.log(launch)
   return (
      <div className='text-gray- 800 bg-gray-100 py-2 px-4 flex flex-col justify-between border border-gray-500 h-auto w-48 rounded-md mx-auto'>
         <div>
            <div className="flex justify-end mt-8 ">
            <img src={launch.links.mission_patch_small} alt="Mission Patch" className='rounded-full h-12'/>
            </div>
            <p className="text-xs text-gray-400">{new Date(''+ launch.static_fire_date_utc).toString().slice(0,15)}</p>
            <p className='truncate font-semibold text-md'>{launch.mission_name}</p>
            <p>with {launch.rocket.rocket_name}</p>
            
            {launch.launch_success === false ? <p className='text-green-500 font-semibold'>FAILURE</p> : <p className='text-red-500 font-semibold'>SUCCESS</p>}
            {launch.upcoming === true ? <p>Upcoming</p> : <p>not coming</p>}
         </div>
         <p className='flex space-x-1 justify-end'><a rel="noreferrer" href="https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html" target='_blank'>View Details</a> <ArrowRightIcon className='h-6'/></p>
      </div>
   )
}


export default LaunchCard
