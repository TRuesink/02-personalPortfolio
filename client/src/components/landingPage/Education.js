import React from "react";
import piLogo from "../../static/images/piLogo.jpg";

class Education extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }} className="custom-section">
        <div className="resume-section">
          <h1 className="title">EDUCATION</h1>
          <div className="content-column">
            <div className="custom-card">
              <img src={piLogo}></img>
              <div className="info">
                <div className="header">
                  <h4 className="job-title">Sales Engineer</h4>
                  <h4 className="company">Plastic Ingenuity</h4>
                </div>
                <p className="font-italic">Sep 2019 - March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  mi eros, dignissim non felis in, tincidunt auctor lorem. Sed
                  vitae varius nulla, at mattis lorem. Etiam vestibulum dolor id
                  mi convallis, vel viverra dui maximus.
                </p>
              </div>
            </div>
            <hr></hr>
            <div className="custom-card">
              <img src={piLogo}></img>
              <div className="info">
                <div className="header">
                  <h4 className="job-title">Sales Engineer</h4>
                  <h4 className="company">Plastic Ingenuity</h4>
                </div>
                <p className="font-italic">Sep 2019 - March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  mi eros, dignissim non felis in, tincidunt auctor lorem. Sed
                  vitae varius nulla, at mattis lorem. Etiam vestibulum dolor id
                  mi convallis, vel viverra dui maximus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
