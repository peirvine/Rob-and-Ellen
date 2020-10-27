import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CustomNav from './components/nav/CustomNav'
import Footer from './components/footer/Footer'
import Component from './component';
import Home from './components/home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CustomNav />
    <Router>
      <Switch>
        <Route path="/schedule">
          <Component />
        </Route>
        <Route path="/travel">
          <Component />
        </Route>
        <Route path="/registry">
          <Component />
        </Route>
        <Route path="/wedding-party">
          <Component />
        </Route>
        <Route path="/photos">
          <Component />
        </Route>
        <Route path="/things-to-do">
          <Component />
        </Route>
        <Route path="/faq">
          <Component />
        </Route>
        <Route path="/rsvp">
          <Component />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
