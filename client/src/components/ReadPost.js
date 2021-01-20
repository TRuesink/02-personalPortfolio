import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUser } from "../actions";
import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";

class ReadPost extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUser(this.props.match.params.id);
  }

  renderPostContent() {
    const { post, users } = this.props;
    return (
      <div className="post-detail-container">
        <div className="post-detail-title">
          <div className="display-3">{post.title}</div>
          <h3 className="text-muted">{post.teaser}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="text-muted">
              Written by {!users[post.user] ? "loading" : users[post.user].name}
            </p>
            <p className="text-muted">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          src={`/api/v1/photos/uploads/${post.photo}`}
          className="post-detail-image"
        ></img>
        <div
          className="post-detail-section"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
        <div className="post-detail-comments">
          <hr></hr>
          <h1>Comments</h1>
          <CommentForm postId={this.props.match.params.id} />
          <CommentList comments={post.comments} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {!this.props.post ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <>{this.renderPostContent()}</>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.data[ownProps.match.params.id],
    users: state.users.data,
  };
};

export default connect(mapStateToProps, { fetchPostAndUser })(ReadPost);
