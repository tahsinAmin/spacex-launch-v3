import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

function Rocket({ launch }) {
   console.log(launch)
   return (
      <div className='flex flex-col justify-between border border-gray-500 h-48 w-48 rounded-md mx-auto'>
         <div className="">
            <div className="flex justify-between">
               <p key={launch.flight_number}>{launch.rocket.rocket_name}</p>
               {/* <img src={launch.links.mission_patch_small} className='rounded-full h-6' /> */}
               <img src={launch.links.mission_patch_small} alt="Mission Patch" className='rounded-full h-6'/>
            </div>
            <p className="okay">{launch.launch_date_local}</p>
            {launch.launch_success === false ? <p className='text-green-500 font-semibold'>FAILURE</p> : <p className='text-red-500 font-semibold'>SUCCESS</p>}
            {launch.upcoming === true ? <p>Upcoming</p> : <p>not coming</p>}
         </div>
         <p className='flex space-x-1 justify-end'><a href="#">View Details</a> <ArrowRightIcon className='h-6'/></p>
      </div>
   )
}

export default Rocket
