import React from 'react'
import LaunchCard from './LaunchCard'

import { useSelector } from 'react-redux'
import {getAllLaunches} from '../features/launches/launchSlice'

function LaunchListing({ blasts, count}) {
   const launches = useSelector(getAllLaunches);
   // console.log(launches);
   return(
      <div className='mx-auto grid grid-cols-2 gap-auto md:grid-cols-4 lg:grid-cols-6'>
      {launches.slice(0, count).map((launch, flight_number) => (
         <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
      </div>
   )
}

//    return (
//       <div className='mx-auto grid grid-cols-2 gap-auto md:grid-cols-4 lg:grid-cols-6'>
//       {blasts.slice(0, count).map((blast, key) => (
//          <LaunchCard key={blast.flight_number} blast={blast} />
//       ))}
//       </div>
//    )
// }

export default LaunchListing