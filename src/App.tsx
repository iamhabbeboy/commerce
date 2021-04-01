import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Router>
              <h1>jhkhhkhj</h1>
              <Routes />
            </Router>
      </header>
    </div>
  );
}

export default App;
