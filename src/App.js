import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { increment, decrement, incrementByAmount } from './redux/counter';
import Searchbar from './components/Searchbar';
import LaunchListing from './components/LaunchListing';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import LaunchDetail from './components/LaunchDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

function App() {
  const [launches, setLaunches] = useState([]);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(6)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches').then(res => res.json()).then((data) => {
      data.sort((a, b) => parseFloat(b.launch_year) - parseFloat(a.launch_year));
      setLaunches([...data])
    })
  }, [])

  const loadMore = () => {
    setLoad(load+6);
    console.log(load)
  }

  return (
    <div className="App">
        <Searchbar/>
        <h1 className='text-4xl font-semibold'>the count is: {count}</h1>
        <button className='border text-sm p-2' onClick={() => dispatch(increment())}>Increment</button>
        <button className='border text-sm p-2' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='border text-sm p-2' onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
        <LaunchListing launches={launches} load={load}/>
        <button className='border text-sm p-2' onClick={() => loadMore()}>Load More</button>

        <Router>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/launch/:launchID' component={LaunchDetail}/>
            <Route component={PageNotFound}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;

