import React from "react";

import { connect } from "react-redux";

class RecentProjects extends React.Component {
  renderRecentPosts() {
    const recent = this.props.posts.filter((post) => {
      return post.featured === false && post.type === "project";
    });
    return recent.map((post) => {
      return (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-3">
              <img
                style={{
                  maxHeight: "10rem",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
                src={`/api/v1/photos/uploads/${post.photo}`}
                className="card-img"
                alt="..."
              ></img>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5
                  style={{ color: "#02729e", fontWeight: "bold" }}
                  className="card-title"
                >
                  {post.title}
                </h5>
                <p className="card-text">{post.teaser}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ marginBottom: 0 }} className="text-muted">
                    {post.user}
                  </p>
                  <p
                    style={{ marginBottom: 0 }}
                    className="text-muted font-italic"
                  >
                    {post.createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">RECENT</h1>
          {this.props.isFetching || this.props.posts.length === 0 ? (
            <div class="ui active centered inline loader"></div>
          ) : (
            <>{this.renderRecentPosts()}</>
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

export default connect(mapStateToProps)(RecentProjects);
