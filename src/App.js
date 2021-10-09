import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import LaunchDetail from './components/LaunchDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App bg-gray-600 h-scren">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/launch/:flight_number' component={LaunchDetail}/>
          <Route component={PageNotFound}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


// Search on how to make a searhbar work with react and redux (Learning)
// Set up the Mrgin
// Add contents.
// https://blog.bitsrc.io/how-to-set-up-airbnb-style-guide-for-react-projects-fc7dfb1f3d68 (Learning)
// Some doesn't have misison patch, need to do something about it later. (Learning)
// whatever our launches array holding, we need to rename it and work with the dispatch for addLaunches

// Learned
// Leanred how to take the fetch data in a variable.
// Showing data using redux.