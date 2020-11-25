import React from 'react';
import './Nav.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

export default function CustomNav() {
  return (
    <Router>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand>Ellen & Rob </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/schedule">Schedule</Link></Nav.Link>
              <Nav.Link><Link to="/travel">Travel</Link></Nav.Link>
              <Nav.Link><Link to="/registry">Registry</Link></Nav.Link>
              <Nav.Link><Link to="/wedding-party">Wedding Party</Link></Nav.Link>
              <Nav.Link><Link to="/photos">Photos</Link></Nav.Link>
              <Nav.Link><Link to="/things-to-do">Things To Do</Link></Nav.Link>
              <Nav.Link><Link to="/faq">FAQS</Link></Nav.Link>
              <Nav.Link><Link to="/rsvp">RSVP</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Router>
  )
}
