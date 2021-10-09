import React from 'react'
// import { ArrowRightIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'

function LaunchCard({ launch }) {
   // console.log(launch)
   return (
      <div>
         <Link to={`/launch/${launch.flight_number}`}>
            <div className='text-gray-800 bg-gray-100 py-2 px-4 flex flex-col pb-4 justify-between border border-gray-500 h-96 w-72 rounded-md mx-auto'>
               <div className="">
                  <img src={launch.links.mission_patch_small} alt="Mission Patch" className='my-3 rounded-full h-12 mx-auto'/>
                  <p className='font-regular'>{launch.rocket.rocket_name}</p>
                  <p className=' font-bold text-2xl'>{launch.mission_name}</p>

                  
                  {launch.launch_success === false ? <p className='text-red-500 font-semibold'>FAILURE</p> : <p className='text-green-500 font-semibold'>SUCCESS</p>}
                  <p className=''>{launch.details.slice(0,113)} 
                     <a className='text-blue-600 font-medium' rel="noreferrer" href="https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html" target='_blank'>...Read More</a>
                  </p>
               </div>
               <p className="text-xs text-gray-400">{new Date(''+ launch.launch_date_utc).toString().slice(0,15)}</p>
            </div>
         </Link>
      </div>
   )
}


export default LaunchCard
