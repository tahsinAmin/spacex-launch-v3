import React from 'react'
import Rocket from './Rocket'

function Rockets({ launches, load}) {
   return (
      <div className='grid grid-cols-6 gap-7'>
      {launches.slice(0, load).map(launch => (
         <Rocket launch={launch} />
      ))}
      </div>
   )
}

export default Rockets