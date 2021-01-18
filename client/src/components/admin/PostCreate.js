import React from "react";
import _ from "lodash";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { createPost } from "../../actions";

class PostCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div>
        <h1>CREATE POST</h1>
        <PostForm
          initialValues={{ content: "Add content here" }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
