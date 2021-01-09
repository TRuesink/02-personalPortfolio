import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" expand="lg" fixed="top" bg="dark">
          <NavLink to="/" className="custom-nav-brand navbar-brand">
            timruesink.com
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link custom-nav-item" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link custom-nav-item" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link custom-nav-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Nav>
            <Nav>
              <button className="btn btn-primary">Sign In</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
