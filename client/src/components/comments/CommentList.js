import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions";

class CommentList extends React.Component {
  renderCommentList() {
    return this.props.comments
      .filter((comment) => {
        return comment.post._id === this.props.postId;
      })
      .map((comment) => {
        return (
          <div key={"comment-" + comment._id}>
            <div className="comment-header">
              <span>
                <strong>{comment.user.name}</strong>
              </span>
              <span className="dot ml-2 mr-2"></span>
              <span className="text-muted">
                {Math.round(
                  (new Date() - new Date(comment.createdAt)) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days ago
              </span>
            </div>
            <p>{comment.content}</p>
            <hr style={{ backgroundColor: "#e9ecef" }}></hr>
          </div>
        );
      });
  }
  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <div className="ui active centered inline loader"></div>
        ) : this.props.comments.length === 0 ? null : (
          <div className="comment-list">{this.renderCommentList()}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.comments.isFetching,
    comments: Object.values(state.comments.data),
  };
};

export default connect(mapStateToProps, { fetchComments })(CommentList);
