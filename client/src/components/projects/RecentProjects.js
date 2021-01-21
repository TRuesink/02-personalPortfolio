import React from "react";
import { connect } from "react-redux";

import PostItem from "../PostItem";

class RecentProjects extends React.Component {
  renderRecentPosts() {
    const recent = this.props.posts.filter((post) => {
      return post.featured === false && post.type === "project";
    });
    return recent.map((post) => {
      return <PostItem post={post} key={post._id} />;
    });
  }
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title">RECENT</h1>
          {this.props.isFetching || this.props.posts.length === 0 ? (
            <div className="ui active centered inline loader"></div>
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
