// test my github token
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={index}/>
          </Switch>
        
        </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
