import React from "react";

import blogBanner from "../../static/images/blogBanner.jpg";

class BlogBanner extends React.Component {
  render() {
    return (
      <div className="custom-section banner">
        <img className="portfolio-image" src={blogBanner} alt="blog"></img>
        <div className="content">
          <h1 className="display-4">
            <b>BLOG</b>
          </h1>
          <h5>
            Sometimes reality is too complex.
            <br />
            Stories give it form.
            <br />
            <span className="text-muted">- Jean Luc Godard</span>
          </h5>
        </div>
      </div>
    );
  }
}

export default BlogBanner;
