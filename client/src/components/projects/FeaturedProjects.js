import React from "react";
import { connect } from "react-redux";

class FeaturedProjects extends React.Component {
  renderFeaturedProject() {
    const featured = this.props.posts.filter((post) => {
      return post.featured === true && post.type === "project";
    });
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
              {this.props.users[featured[0].user]}
            </p>
            <p style={{ marginBottom: 0 }} className="text-muted font-italic">
              {new Date(featured[0].createdAt).toLocaleDateString()}
            </p>
          </div>
          <hr></hr>

          <h5 style={{ marginBottom: "1rem" }}>{featured[0].teaser}</h5>
          <button className="btn btn-primary">Read More</button>
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
    users: state.users.data,
  };
};

export default connect(mapStateToProps)(FeaturedProjects);
