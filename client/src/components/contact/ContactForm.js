import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showAlert } from "../../actions";

const emailRegExp = new RegExp(
  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
);

class ContactForm extends React.Component {
  renderInput({ input, meta, label }) {
    const className = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <>
        <label>{label}</label>
        <input
          {...input}
          type={label}
          className={className}
          id={label}
          placeholder={label}
        ></input>
        {meta.error && meta.touched ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </>
    );
  }

  renderTextArea({ input, meta, label }) {
    const className = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <>
        <label>{label}</label>
        <textarea
          {...input}
          rows="6"
          className={className}
          id={label}
          placeholder={label}
        ></textarea>
        {meta.error && meta.touched ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    this.props.showAlert({
      type: "success",
      content: "Thanks for contacting me!",
    });
    window.scrollTo(0, 0);
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
          <div className="form-row">
            <div className="form-group col-md-6">
              <Field name="email" component={this.renderInput} label="Email" />
            </div>
            <div className="form-group col-md-6">
              <Field name="name" component={this.renderInput} label="Name" />
            </div>
          </div>
          <div className="form-group">
            <Field
              name="subject"
              component={this.renderInput}
              label="Subject"
            />
          </div>
          <div className="form-group">
            <Field
              name="message"
              component={this.renderTextArea}
              label="Message"
            />
          </div>
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
  if (!formValues.email) {
    errors.email = "You must enter your email";
  }
  if (!emailRegExp.test(formValues.email)) {
    errors.email = "You must enter a valid email";
  }

  if (!formValues.name) {
    errors.name = "You must enter your name";
  }
  if (!formValues.subject) {
    errors.subject = "You must enter a subject";
  }

  if (!formValues.message) {
    errors.message = "You must enter a message";
  }
  return errors;
};

ContactForm = reduxForm({
  form: "contactForm",
  validate: validate,
})(ContactForm);

const mapStateToProps = (state) => {
  return {
    isFetching: state.messages.isFetching,
  };
};

export default connect(mapStateToProps, { showAlert })(ContactForm);
