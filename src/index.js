import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

import Home from './components/home/Home'
import Header from './components/header/Header'
import Schedule from './components/schedule/Schedule'
import Hotels from './components/hotels/Hotels'
import Registry from './components/registry/Registry'
import Photos from './components/photos/Photos'
import Rsvp from './components/rsvp/RSVP'
import Footer from './components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


const trackingId = "G-M6CY7G07XG"
ReactGA.initialize(trackingId)
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="sticky">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navBar" as="div">
              <Nav.Link eventKey="0" as={Link} to="/">Home</Nav.Link>
              <Nav.Link eventKey="1" as={Link} to="/schedule">Schedule</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/hotels">Hotels</Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/registry">Registry</Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/photos">Photos</Nav.Link>
              <Nav.Link href="https://ellenandrob.anrsvp.com/" target="_blank" rel="noreferrer" as="a">RSVP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div id="content">
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
