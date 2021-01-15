import React from "react";

import about_photo from "../../static/images/about_photo2.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">ABOUT</h1>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            eros, dignissim non felis in, tincidunt auctor lorem. Sed vitae
            varius nulla, at mattis lorem. Etiam vestibulum dolor id mi
            convallis, vel viverra dui maximus. Morbi in efficitur quam, sit
            amet venenatis turpis. Mauris bibendum aliquam mollis. Donec non
            felis sed felis dictum ultrices.
          </p>
          <div className="content">
            <img
              style={{ height: "auto" }}
              src={about_photo}
              alt="aboutPhoto"
            ></img>
            <div className="description">
              <h3>Software / Sales / Mechanical Engineer</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mi eros, dignissim non felis in, tincidunt auctor lorem.
              </p>
              <blockquote className="blockquote">
                <p className="mb-0" style={{ color: "#02729e" }}>
                  “If I had an hour to solve a problem I'd spend 55 minutes
                  thinking about the problem and 5 minutes thinking about
                  solutions.”
                </p>
                <footer className="blockquote-footer">Albert Einstein</footer>
              </blockquote>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mi eros, dignissim non felis in, tincidunt auctor lorem. Sed
                vitae varius nulla, at mattis lorem. Etiam vestibulum dolor id
                mi convallis, vel viverra dui maximus. Morbi in efficitur quam,
                sit amet venenatis turpis. Mauris bibendum aliquam mollis. Donec
                non felis sed felis dictum ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
