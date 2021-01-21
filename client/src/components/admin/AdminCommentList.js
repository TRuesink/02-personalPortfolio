import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AdminCommentList extends React.Component {
  renderPostList() {
    return this.props.posts.map((post, index) => {
      return (
        <Link
          key={post._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          to={`/admin/comments/${post._id}`}
          className="list-group-item list-group-item-action"
        >
          {!this.props.posts[index] ? "loading" : post.title}
          <span className="badge badge-dark badge-pill">
            {!this.props.posts[index] ? 0 : post.comments.length}
          </span>
        </Link>
      );
    });
  }
  render() {
    return <div className="list-group">{this.renderPostList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.data),
  };
};

export default connect(mapStateToProps)(AdminCommentList);
