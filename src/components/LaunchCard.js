import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

function LaunchCard({ blast }) {
   console.log(blast)
   return (
      <div className='text-gray- 800 bg-gray-100 py-2 px-4 flex flex-col justify-between border border-gray-500 h-auto w-48 rounded-md mx-auto'>
         <div>
            <div className="flex justify-end mt-8 ">
            <img src={blast.links.mission_patch_small} alt="Mission Patch" className='rounded-full h-12'/>
            </div>
            <p className="text-xs text-gray-400">{new Date(''+ blast.launch_date_utc).toString().slice(0,15)}</p>
            <p className='truncate font-semibold text-md'>{blast.mission_name}</p>
            <p>with {blast.rocket.rocket_name}</p>
            
            {blast.launch_success === false ? <p className='text-green-500 font-semibold'>FAILURE</p> : <p className='text-red-500 font-semibold'>SUCCESS</p>}
            {blast.upcoming === true ? <p>Upcoming</p> : <p>not coming</p>}
         </div>
         <p className='flex space-x-1 justify-end'><a rel="noreferrer" href="https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html" target='_blank'>View Details</a> <ArrowRightIcon className='h-6'/></p>
      </div>
   )
}


export default LaunchCard
