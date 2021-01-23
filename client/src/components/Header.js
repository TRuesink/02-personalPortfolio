import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SignInForm from "./auth/SignInForm";
import { connect } from "react-redux";
import { getMe, signOut } from "../actions";

class Header extends React.Component {
  componentDidMount() {
    this.props.getMe();
  }

  renderAuth() {
    if (this.props.auth.isSignedIn) {
      return (
        <>
          <Navbar.Text style={{ marginRight: "2rem", padding: "0.5rem 1rem" }}>
            Hi {this.props.auth.user.name}
          </Navbar.Text>

          <button
            onClick={() => this.props.signOut()}
            className="btn btn-primary"
          >
            Sign Out
          </button>
        </>
      );
    }
    return (
      <>
        <Dropdown alignRight={true}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sign In
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <SignInForm />
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/register">
              Don't have an account? Register
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

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
            <Nav>{this.renderAuth()}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getMe, signOut })(Header);
