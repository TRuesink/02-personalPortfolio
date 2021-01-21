import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AdminPostItem from "./AdminPostItem";

class PostList extends React.Component {
  renderPosts() {
    return this.props.posts.map((post) => {
      return <AdminPostItem post={post} key={post._id} />;
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>POSTS</h1>
          <Link to="/admin/posts/new">
            <button className="btn btn-primary">New</button>
          </Link>
        </div>

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
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(PostList);
