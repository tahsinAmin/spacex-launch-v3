import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { incrementByAmount } from '../features/counter/counterSlice';
import Searchbar from './Searchbar';
import LaunchListing from './LaunchListing';
import {launches,addLaunches} from '../features/launches/launchSlice'
import axios from 'axios'

function Home() {
  const [blasts, setBlasts] = useState([]);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches').then((result) => {
      const data = result.data;
      data.sort((a, b) => parseFloat(b.launch_year) - parseFloat(a.launch_year));
      setBlasts([...data])
    }).catch((err) => {
      console.log("Err: ", err);
    });
  }, [])

  useEffect(() => {
    const fetchLaunches = async () => {
       const response = await axios.get('https://api.spacexdata.com/v3/launches').catch((err) => {
          console.log("Err: ", err);
       });
       // console.log('The response from api', response);
       dispatch(addLaunches(response.data))
       console.log(launches)
    }
    fetchLaunches();
 },);

  return (
    <div className="Home">
        <Searchbar/>
        <LaunchListing blasts={blasts} count={count}/>
        <button className='border text-sm p-2 my-4' onClick={() => dispatch(incrementByAmount(6))}>Load More</button>
    </div>
  );
}

export default Home;