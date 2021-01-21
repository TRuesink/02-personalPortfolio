import React from "react";
import { reduxForm } from "redux-form";
import ControlledEditor from "./ControlledEditor";
import PhotoField from "./PhotoField";
import { connect } from "react-redux";
import { Field } from "redux-form";

class PostForm extends React.Component {
  renderEditor({ input, initialValues, label }) {
    return (
      <div>
        <label>{label}</label>
        <ControlledEditor {...input} init={initialValues} />
      </div>
    );
  }

  renderTextInput({ input, label }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type="text" className="form-control"></input>
      </div>
    );
  }

  renderDropDown({ input, label }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <select {...input} className="form-control">
          <option>project</option>
          <option>blog</option>
        </select>
      </div>
    );
  }

  renderPhotoUpload({ input, label }) {
    return <PhotoField {...input} label={label} />;
  }

  renderCheckBox({ input, label }) {
    return (
      <div className="form-check">
        <input {...input} className="form-check-input" type="checkbox"></input>
        <label className="form-check-label">{label}</label>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
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
              name="title"
              component={this.renderTextInput}
              label="Title"
            />
            <Field
              name="teaser"
              component={this.renderTextInput}
              label="Teaser"
            />
            <Field name="type" component={this.renderDropDown} label="Type" />
            <div className="form-check">
              <Field
                className="form-check-input"
                name="featured"
                type="checkbox"
                component="input"
                label="Featured"
              />
              <label className="form-check-label">Featured</label>
            </div>
            <br></br>
            <hr></hr>
            <Field
              name="content"
              component={this.renderEditor}
              initialValues={this.props.initialValues.content}
              label="Content"
            />
            <button className="btn btn-primary" key="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm = reduxForm({
  form: "postForm",
})(PostForm);

const mapStateToProps = (state) => {
  return {
    isFetching: state.posts.isFetching,
  };
};

export default connect(mapStateToProps)(PostForm);
