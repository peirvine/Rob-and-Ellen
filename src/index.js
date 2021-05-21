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
import WeddingParty from './components/weddingparty/WeddingParty'
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
        <Navbar expand="lg" collsapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBar" as="div">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/schedule">Schedule</Link></Nav.Link>
              <Nav.Link><Link to="/hotels">Hotels</Link></Nav.Link>
              <Nav.Link><Link to="/registry">Registry</Link></Nav.Link>
              {/*<Nav.Link><Link to="/wedding-party">Wedding Party</Link></Nav.Link>*/}
              <Nav.Link><Link to="/photos">Photos</Link></Nav.Link>
              {/*<Nav.Link><Link to="/rsvp">RSVP</Link></Nav.Link>*/}
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
          <Route path="/wedding-party">
            <WeddingParty />
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
