import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.comments.forEach((comment) => {
      if (!Object.keys(this.props.users).includes(comment.user)) {
        this.props.fetchUser(comment.user);
      }
    });
  }
  renderCommentList() {
    return this.props.comments.map((comment) => {
      return (
        <div>
          <div className="comment-header">
            <h3>
              {!this.props.users[comment.user]
                ? "loading"
                : this.props.users[comment.user].name}
            </h3>
            <span className="dot ml-3 mr-3"></span>
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
    return <div className="comment-list">{this.renderCommentList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
  };
};

export default connect(mapStateToProps, { fetchUser })(CommentList);
