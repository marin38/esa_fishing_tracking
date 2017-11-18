import React from 'react';
import { Link } from 'react-router-dom';
// import Home from '../home';
// import About from '../about';
// import AeroMap from '../../components/map';
import Main from '../../components/main'
import './style.css'; 

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
      <Link to="/about-us">About</Link>
    </header>

    <Main />

  </div>
);

export default App;