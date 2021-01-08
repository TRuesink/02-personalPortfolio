import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class Sidebar extends React.Component {
  renderLinks() {
    return this.props.sections.map((section) => {
      return (
        <li className="nav-item">
          <ScrollLink
            className="nav-link custom-sidebar-link"
            activeClass=""
            to={section.name}
            spy={true}
            smooth={true}
            duration={500}
          >
            <i class={`${section.icon} icon custom-icon`}></i>
            <div className="sidebar-header">{section.name}</div>
          </ScrollLink>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="custom-sidebar">
        <ul className="nav nav-pills flex-column">{this.renderLinks()}</ul>
      </div>
    );
  }
}

export default Sidebar;
