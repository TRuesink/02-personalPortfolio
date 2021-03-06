import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FeaturedBlog extends React.Component {
  renderFeaturedProject() {
    const featured = this.props.posts.filter((post) => {
      return post.featured === true && post.type === "blog";
    });
    if (featured.length === 0) {
      return <div className="ui active centered inline loader"></div>;
    }
    return (
      <div className="content">
        <img
          style={{ height: "auto" }}
          src={`/api/v1/photos/uploads/${featured[0].photo}`}
          alt={featured[0].photo}
        ></img>
        <div className="featured-post-description">
          <h3 className="post-title">{featured[0].title}</h3>
          <div className="post-author">
            <p style={{ marginBottom: 0 }} className="text-muted">
              {featured[0].user.name}
            </p>
            <p style={{ marginBottom: 0 }} className="text-muted font-italic">
              {new Date(featured[0].createdAt).toLocaleDateString()}
            </p>
          </div>
          <hr></hr>

          <h5 style={{ marginBottom: "1rem" }}>{featured[0].teaser}</h5>
          <Link to={`/posts/${featured[0]._id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">FEATURED</h1>
          {this.props.isFetching || this.props.posts.length === 0 ? (
            <div className="ui active centered inline loader"></div>
          ) : (
            <>{this.renderFeaturedProject()}</>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.data),
    isFetching: state.posts.isFetching,
    errorMessage: state.posts.errorMessage,
  };
};

export default connect(mapStateToProps)(FeaturedBlog);
