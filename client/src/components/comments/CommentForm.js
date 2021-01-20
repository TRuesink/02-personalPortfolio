import React from "react";
import { reduxForm, Field } from "redux-form";

class CommentForm extends React.Component {
  renderCommentBox({ input, placeholder }) {
    return (
      <div class="mb-3">
        <textarea
          {...input}
          class="form-control"
          placeholder={placeholder}
          rows="3"
        ></textarea>
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    // this.props.createComment(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="content"
          component={this.renderCommentBox}
          placeholder="Leave a comment"
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "commentForm",
})(CommentForm);
