import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { incrementByAmount } from '../features/counter/counterSlice';
import Searchbar from './Searchbar';
import LaunchListing from './LaunchListing';

function Home() {
  const [launches, setLaunches] = useState([]);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const [load, setLoad] = useState(6)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches').then(res => res.json()).then((data) => {
      data.sort((a, b) => parseFloat(b.launch_year) - parseFloat(a.launch_year));
      setLaunches([...data])
    }).catch((err) => {
      console.log("Err: ", err);
    });
  }, [])

  return (
    <div className="Home">
        <Searchbar/>
        <LaunchListing launches={launches} count={count}/>
        <button className='border text-sm p-2 my-4' onClick={() => dispatch(incrementByAmount(6))}>Load More</button>
    </div>
  );
}

export default Home;