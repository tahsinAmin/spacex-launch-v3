import React, { useEffect } from 'react'
import Searchbar from './Searchbar';
import LaunchListing from './LaunchListing';

import { useDispatch } from 'react-redux';
import {fetchAsyncLaunches} from '../features/launches/launchSlice'

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncLaunches());
  },[dispatch]);
  return (
    <div className="Home">
       <Searchbar/>
       <LaunchListing/>
    </div>
  );
};

export default Home;