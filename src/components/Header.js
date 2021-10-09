import React from 'react';
import {Link} from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/solid'


function Header() {
   return (
      <div className='header bg-black flex items-center justify-between px-4'>
      <Link to='/'>
         <div className='logo text-white text-2xl font-semibold'>SpaceX</div>
      </Link>
      <UserCircleIcon className='user-image h-12 text-green-500'/>
        
      </div>
   );
};



export default Header;