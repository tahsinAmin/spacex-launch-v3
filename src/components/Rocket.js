import React from 'react'

function Rocket({ launch }) {
   return (
      <div className='border border-gray-500 h-48 w-48 rounded-md mx-auto'>
         <p key={launch.flight_number}>{launch.mission_name}</p>
      </div>
   )
}

export default Rocket
