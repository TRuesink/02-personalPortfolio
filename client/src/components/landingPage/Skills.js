import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }} className="custom-section">
        <div className="resume-section">
          <h1 className="title">SKILLS</h1>
          <div className="content-column">
            <h3>Software</h3>
            <hr></hr>
            <div className="skills-section">
              <div className="custom-pill btn btn-primary">
                Javascript <span class="badge badge-light">5/10</span>
              </div>
              <div className="custom-pill btn btn-primary">
                Node / Express <span class="badge badge-light">7/10</span>
              </div>
              <div className="custom-pill btn btn-primary">
                MongoDB / Mongoose <span class="badge badge-light">3/10</span>
              </div>
              <div className="custom-pill btn btn-primary">
                JSForce / Salesforce Integration{" "}
                <span class="badge badge-light">8/10</span>
              </div>
              <div className="custom-pill btn btn-primary">
                HTML / CSS <span class="badge badge-light">10/10</span>
              </div>
            </div>
            <h3>Sales</h3>
            <hr></hr>
            <h3>Mechanical Engineering</h3>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
