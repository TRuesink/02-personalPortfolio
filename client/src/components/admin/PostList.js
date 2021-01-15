import React from "react";
import { connect } from "react-redux";

import AdminPostItem from "./AdminPostItem";

class PostList extends React.Component {
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <AdminPostItem
          post={post}
          userName={this.props.users[post.user]}
          key={post._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h1>POSTS</h1>
        {this.props.isFetching || this.props.posts.length === 0 ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <>{this.renderPosts()}</>
        )}
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

export default connect(mapStateToProps)(PostList);
