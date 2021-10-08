import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { increment, decrement, incrementByAmount } from './redux/counter';
import Searchbar from './components/Searchbar';
import Rockets from './components/Rockets';
import './App.css';

function App() {
  const [launches, setLaunches] = useState([]);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(5)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches').then(res => res.json()).then((data) => {
      data.sort((a, b) => parseFloat(b.launch_year) - parseFloat(a.launch_year));
      setLaunches([...data])
    })
  }, [])

  const loadMore = () => {
    setLoad(load+5);
    console.log(load)
  }

  return (
    <div className="App">
        <Searchbar/>
        <h1 className='text-4xl font-semibold'>the count is: {count}</h1>
        <button className='border text-sm p-2' onClick={() => dispatch(increment())}>Increment</button>
        <button className='border text-sm p-2' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='border text-sm p-2' onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>

        <Rockets launches={launches} load={load}/>

        <button className='border text-sm p-2' onClick={() => loadMore()}>Load More</button>
    </div>
  );
}

export default App;


