import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import DigitalAssets from './components/DigitalAssets';

const App = () => (
  <div className="App">
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/digital-assets">Digital Assets</Link>
      </nav>
    </header>
    <main>
      <Route exact path="/" component={Landing} />
      <Route path="/library" component={Library} />
      <Route path="/digital-assets" component={DigitalAssets} />
    </main>
  </div>
);

export default App;
