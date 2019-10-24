import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DigitalAssets from './components/DigitalAssets';

const App = () => (
  <div className="App">
    <main>
      <Route path="/" component={DigitalAssets} />
    </main>
  </div>
);

export default App;
