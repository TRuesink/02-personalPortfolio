import React from "react";
import _ from "lodash";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { fetchPost, updatePost, deletePost } from "../../actions";
import FileUpload from "./FileUpload";

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updatePost(this.props.match.params.id, formValues);
  };

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
          <h1>EDIT POST</h1>
          <button
            onClick={() => this.props.deletePost(this.props.match.params.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>

        {!this.props.post ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <>
            <FileUpload
              postId={this.props.match.params.id}
              currentPhoto={this.props.post.photo}
            />
            <PostForm
              postId={this.props.match.params.id}
              initialValues={_.pick(this.props.post, [
                "title",
                "teaser",
                "type",
                "featured",
                "content",
              ])}
              onSubmit={this.onSubmit}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.data[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(
  PostDetail
);
