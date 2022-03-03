import './App.css';
import CountDown from './components/countdown'
import Header from './components/header'
import HomePage from './components/homePage'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/myDrugs/'>
          <CountDown></CountDown>
        </Route>
 
        <Route path='/myDrugs/home'>
          <Header></Header>
        </Route>

        <Route exact path="/myDrugs/home">
          <HomePage></HomePage>
        </Route>

      </Router>
    </div>
  );
}

export default App;
