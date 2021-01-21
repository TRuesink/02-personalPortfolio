import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { createComment } from "../../actions";

class CommentForm extends React.Component {
  renderCommentBox({ input, meta, placeholder }) {
    const className = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <div className="mb-3">
        <textarea
          {...input}
          className={className}
          placeholder={placeholder}
          rows="3"
        ></textarea>
        {meta.error && meta.touched ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createComment(this.props.postId, formValues);
  };

  render() {
    return (
      <div className="is-loading">
        {this.props.isFetching ? (
          <>
            <div className="is-loading-spinner">
              <div className="ui active centered inline loader"></div>
            </div>
            <div className="is-loading-background"></div>
          </>
        ) : null}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="content"
            component={this.renderCommentBox}
            placeholder="Leave a comment"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.content) {
    errors.content = "You must enter some text";
  }
  return errors;
};

CommentForm = reduxForm({
  form: "commentForm",
  validate: validate,
})(CommentForm);

const mapStateToProps = (state) => {
  return {
    isFetching: state.comments.isFetching,
  };
};

export default connect(mapStateToProps, { createComment })(CommentForm);
