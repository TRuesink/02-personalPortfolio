import React from "react";

import about_photo from "../../static/images/about_photo2.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">ABOUT</h1>
          <p style={{ textAlign: "center" }}>
            Hi! My name is Tim Ruesink, I'm an engineer and I like to solve
            interesting problems. In undergrad, it was surgical biomechanics. In
            grad school, it was cardiovascular heart disease. Professionally,
            it's been problems of a business nature... I can peel back the
            hypothetical layers of a complex problem, break it down into smaller
            problems, and find elegant solutions.
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
                I am a self-taught software developer with academic and
                professional experience in mechanical and sales engineering. All
                my experience has one thing in common - I see solutions in code.
                As Einstein so eloquently said:
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
                I've spent a lot of time thinking about a wide variety of
                problems, from nonoptimal sales funnels to caridovascular
                defects in infants. More often than not, I find that problems
                originate at a software level. I couldn't help but dive
                head-first into coding. After all, the only effective solutions
                are those that address the real problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
