import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/home';
import About from '../containers/about';
import AeroMap from './map';


const Main = () => (
    <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={AeroMap} />
        <Route exact path="/about-us" component={About} />
    </main>
);

export default Main;
