import React from "react";
import { connect } from "react-redux";
import { fetchComments, deleteComment } from "../../actions";

class PostCommentList extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
  }
  renderComments() {
    return this.props.comments
      .filter((comment) => {
        return comment.post._id === this.props.match.params.id;
      })
      .map((comment) => {
        return (
          <div
            className="card mb-3"
            style={{ maxWidth: "100%" }}
            key={"user" + comment._id}
          >
            <div
              className="card-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {comment.user.name}
              <button
                onClick={() => this.props.deleteComment(comment._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <div className="card-body">
                  <p className="card-text">{comment.content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    const postComments = this.props.comments.filter((comment) => {
      return comment.post._id === this.props.match.params.id;
    });
    if (postComments.length === 0) {
      return null;
    }
    return (
      <div>
        <h1>
          {`Comments on post ${postComments[0].post.title} (${postComments.length})`}{" "}
        </h1>
        <div className="is-loading">
          {this.props.isFetching ? (
            <>
              <div className="is-loading-spinner">
                <div className="ui active centered inline loader"></div>
              </div>
              <div className="is-loading-background"></div>
            </>
          ) : null}
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: Object.values(state.comments.data),
    isFetching: state.comments.isFetching,
  };
};

export default connect(mapStateToProps, { fetchComments, deleteComment })(
  PostCommentList
);
