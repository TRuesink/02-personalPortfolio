import React from "react";
import { Link as ScrollLink } from "react-scroll";

class Sidebar extends React.Component {
  renderLinks() {
    return this.props.sections.map((section) => {
      return (
        <li className="nav-item" key={section.name}>
          <ScrollLink
            className="nav-link custom-sidebar-link"
            activeClass=""
            to={section.name}
            spy={true}
            smooth={true}
            duration={500}
          >
            <i className={`${section.icon} icon custom-icon`}></i>
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
