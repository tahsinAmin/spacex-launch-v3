import React from 'react'
import LaunchCard from './LaunchCard'

function LaunchListing({ launches, count}) {
   return (
      <div className='mx-auto grid grid-cols-2 gap-auto md:grid-cols-4 lg:grid-cols-6'>
      {launches.slice(0, count).map((launch, key) => (
         <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
      </div>
   )
}

export default LaunchListing