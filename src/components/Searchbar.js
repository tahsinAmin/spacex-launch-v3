import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function Searchbar() {
   return (
      <div className='flex space-x-1 items-center m-2 py-2 px-4 shadow-md border-gray-400'>
         <SearchIcon className='h-6'/><input className='w-full p-2 text-2xl' type="text" placeholder='Search'/>
      </div>
   )
}

export default Searchbar
