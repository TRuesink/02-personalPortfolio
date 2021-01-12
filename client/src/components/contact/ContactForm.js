import React from "react";
import { Field, reduxForm } from "redux-form";

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
        <label for={label}>{label}</label>
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
        <label for={label}>{label}</label>
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
  };

  render() {
    return (
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
          <Field name="subject" component={this.renderInput} label="Subject" />
        </div>
        <div className="form-group">
          <Field
            name="message"
            component={this.renderTextArea}
            label="Message"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
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

export default reduxForm({
  form: "contactForm",
  validate: validate,
})(ContactForm);
