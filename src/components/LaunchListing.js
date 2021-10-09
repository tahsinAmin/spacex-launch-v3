import React from 'react'
import LaunchCard from './LaunchCard'
import {getAllLaunches} from '../features/launches/launchSlice'
import { incrementByAmount } from '../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function LaunchListing() {
   const launches = useSelector(getAllLaunches);
   const dispatch = useDispatch();
   const { count } = useSelector((state) => state.counter);
   return(
      <div className="">
         <div className='mx-auto grid grid-cols-2 gap-auto gap-y-4 md:grid-cols-4 lg:grid-cols-5'>
         {launches.slice(0, count).map((launch, flight_number) => (
            <LaunchCard key={launch.flight_number} launch={launch} />
         ))}
         </div>
         <button className='border text-sm p-2 my-4' onClick={() => dispatch(incrementByAmount(6))}>Load More</button>
      </div>
   )
}

export default LaunchListing