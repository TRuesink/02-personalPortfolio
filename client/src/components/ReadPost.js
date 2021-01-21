import React from "react";
import { connect } from "react-redux";
import { fetchPost, fetchComments } from "../actions";
import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";
import DOMPurify from "dompurify";

class ReadPost extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  renderPostContent() {
    const { post } = this.props;
    return (
      <div className="post-detail-container">
        <div className="post-detail-title">
          <div className="display-3">{post.title}</div>
          <h3 className="text-muted">{post.teaser}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="text-muted">Written by {post.user.name}</p>
            <p className="text-muted">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          src={`/api/v1/photos/uploads/${post.photo}`}
          className="post-detail-image"
          alt="post"
        ></img>
        <div
          className="post-detail-section"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></div>
        <div className="post-detail-comments">
          <hr></hr>
          <h1>Comments</h1>
          {this.props.auth.user.role === null ? null : (
            <CommentForm postId={this.props.match.params.id} />
          )}
          <CommentList postId={this.props.match.params.id} />
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
    comments: Object.values(state.comments.data),
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchPost, fetchComments })(ReadPost);
