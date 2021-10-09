import React, { useEffect } from 'react'
import LaunchListing from './LaunchListing';

import { useDispatch } from 'react-redux';
import {fetchAsyncLaunches} from '../features/launches/launchSlice'

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncLaunches());
  },[dispatch]);
  return (
    <div className="Home mt-10 mx-4">
       <LaunchListing/>
    </div>
  );
};

export default Home;