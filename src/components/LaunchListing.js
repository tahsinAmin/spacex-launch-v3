import React from 'react'
import LaunchCard from './LaunchCard'

function LaunchListing({ blasts, count}) {
   return (
      <div className='mx-auto grid grid-cols-2 gap-auto md:grid-cols-4 lg:grid-cols-6'>
      {blasts.slice(0, count).map((blast, key) => (
         <LaunchCard key={blast.flight_number} blast={blast} />
      ))}
      </div>
   )
}

export default LaunchListing