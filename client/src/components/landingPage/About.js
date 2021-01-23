import React from "react";

import about_photo from "../../static/images/about_photo2.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">ABOUT</h1>
          <p style={{ textAlign: "center" }}>
            Hi! Nice to meet you. My name is Tim Ruesink, and I am an engineer.
            I identify as such because I like to solve interesting problems. In
            undergrad, it was surgical biomechanics. In grad school, it was
            cardiovascular heart disease. Professionally, it's been problems of
            a business nature... One thing they all have in common --- I look
            first to software and technology as a solution.
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
                First, I wanted to build things. Then, I wanted to build elegant
                things. Finally, I wanted to build elegant things that solved
                real problems.
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
                So where has my experience in software, mechanical and sales
                engineering left me? First, I can understand and analyze diverse
                problems from techincal and business perspectives. Second, I
                have the techincal and management skills to orchestrate elegant
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
