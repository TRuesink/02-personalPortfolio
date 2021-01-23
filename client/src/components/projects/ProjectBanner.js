import React from "react";

import projectBanner from "../../static/images/projectBanner.jpg";

class Banner extends React.Component {
  render() {
    return (
      <div className="custom-section banner">
        <img
          className="portfolio-image"
          src={projectBanner}
          alt="projectBanner"
        ></img>
        <div className="content">
          <h1 className="display-4">
            <b>PROJECTS</b>
          </h1>
          <h5>
            You don't learn to walk by following rules.
            <br />
            You learn by doing and falling over.
            <br />
            <span className="text-muted">- Richard Branson</span>
          </h5>
        </div>
      </div>
    );
  }
}

export default Banner;
