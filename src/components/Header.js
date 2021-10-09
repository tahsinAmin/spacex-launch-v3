import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import { FilterIcon, SearchIcon } from '@heroicons/react/solid'

import { useDispatch } from 'react-redux';
import {fetchAsyncRocket} from '../features/launches/launchSlice'

function Header() {
   const dispatch = useDispatch();
   const [term, setTerm] = useState('')

   function submitHandler(e) {
      e.preventDefault();
      console.log(term);
      dispatch(fetchAsyncRocket(term));
      setTerm('')
   }
   return (
      <div className='header bg-black flex items-center justify-between px-4'>
      {/* <Link to='/'> */}
         <div className='logo text-white text-2xl font-semibold'>SpaceX</div>
      {/* </Link> */}
      <form onSubmit={submitHandler} className='flex  bg-white items-center m-2 py-1 rounded-md px-4 shadow-md border-gray-400'>
         <input onChange={(e) => setTerm(e.target.value)} className='w-full p-2 text-2xl' type="text" placeholder="Search by Rocket's name..."/>
         <button type='submit'><SearchIcon className='h-12 text-black bg-white'/></button>
      </form>
      <FilterIcon className='user-image h-12 text-green-500'/>
        
      </div>
   );
};



export default Header;