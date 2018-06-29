import React, { Component } from 'react';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import routes from './routes';
import Header from './components/Header/Header';

import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Link to='/'>Dashboard</Link>
        <Link to='/wizard'>Wizard</Link>

        <br/>
        {routes}
       
      </div>
    );
  }
}

export default App;
