import React from 'react'
import Rocket from './Rocket'

function Rockets({ launches, load}) {
   return (
      <div className='mx-auto grid grid-cols-6 gap-7'>
      {launches.slice(0, load).map(launch => (
         <Rocket key={launch.flight_number} launch={launch} />
      ))}
      </div>
   )
}

export default Rockets