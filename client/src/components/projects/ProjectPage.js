import React from "react";
import { Element } from "react-scroll";

import Sidebar from "../Sidebar";
import ProjectBanner from "./ProjectBanner";
import FeaturedProjects from "./FeaturedProjects";
import RecentProjects from "./RecentProjects";
import Contact from "../contact/Contact";

const sections = [
  { name: "Home", icon: "home" },
  { name: "Featured", icon: "star" },
  { name: "Recent", icon: "calendar" },
  { name: "Contact", icon: "envelope" },
];

class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar sections={sections} />
        <Element name="Home" className="element">
          <ProjectBanner />
        </Element>
        <Element name="Featured" className="element">
          <FeaturedProjects />
        </Element>
        <Element name="Recent" className="element">
          <RecentProjects />
        </Element>
        <Element name="Contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default ProjectPage;
