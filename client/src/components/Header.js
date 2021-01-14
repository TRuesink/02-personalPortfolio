import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SignInForm from "./auth/SignInForm";

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
              <Dropdown alignRight="false">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Sign In
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <SignInForm />
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    New around here? Sign up
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
