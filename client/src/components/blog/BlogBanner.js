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
            text
            <br />
            text
            <br />
            text
          </h5>
        </div>
      </div>
    );
  }
}

export default BlogBanner;
