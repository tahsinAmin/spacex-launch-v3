import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { increment, decrement, incrementByAmount } from './redux/counter';
import './App.css';

function App() {
  const [launches, setLaunches] = useState([]);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches').then(res => res.json()).then(data => setLaunches([...data]))
  }, [])

  return (
    <div className="App">
      
        <h1 className='text-4xl font-semibold'>the count is: {count}</h1>
        <button className='border text-sm p-2' onClick={() => dispatch(increment())}>Increment</button>
        <button className='border text-sm p-2' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='border text-sm p-2' onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
        {launches.map(launch => (
          <p key={launch.flight_number}>{launch.mission_name}</p>
        ))}
    </div>
  );
}

export default App;
