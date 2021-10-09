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
            <Route path='/launch/:launchID' component={LaunchDetail}/>
            <Route component={PageNotFound}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;

// Search on how to make a searhbar work with react and redux
// Set up the Mrgin
// Add contents.
// https://blog.bitsrc.io/how-to-set-up-airbnb-style-guide-for-react-projects-fc7dfb1f3d68