import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function Searchbar() {
   const [term, setTerm] = useState('')
   const submitHandler = (e) => {
      e.preventDefault();
      console.log(term);
   }
   return (
      <form onSubmit={submitHandler} className='flex space-x-1 items-center m-2 py-2 px-4 shadow-md border-gray-400'>
         <SearchIcon className='h-6'/><input onChange={(e) => setTerm(e.target.value)} className='w-full p-2 text-2xl' type="text" placeholder='Search'/>
      </form>
   )
}

export default Searchbar
