import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { register, showAlert } from "../../actions";

const emailRegExp = new RegExp(
  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
);

class RegisterForm extends React.Component {
  renderInput({ input, meta, label, placeholder, type }) {
    const className = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          {...input}
          type={type}
          className={className}
          placeholder={placeholder}
        ></input>
        {meta.error && meta.touched ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    );
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.register(formValues, () => {
      if (this.props.auth.errorMessage !== "") {
        return this.props.showAlert({
          type: "danger",
          content: this.props.auth.errorMessage,
        });
      }
      this.props.showAlert({
        type: "success",
        content: "Thanks for creating an account!",
      });
    });
  };

  render() {
    return (
      <div className="is-loading">
        {this.props.auth.isFetching ? (
          <>
            <div className="is-loading-spinner">
              <div className="ui active centered inline loader"></div>
            </div>
            <div className="is-loading-background"></div>
          </>
        ) : null}
        <form
          className="px-4 py-3"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="name"
            component={this.renderInput}
            type="text"
            label="Name"
            placeholder="Jon Doe"
          />
          <Field
            name="email"
            component={this.renderInput}
            type="email"
            label="Email"
            placeholder="email@example.com"
          />
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            label="Password"
            placeholder="password"
          />
          <Field
            name="passwordConfirm"
            component={this.renderInput}
            type="password"
            label="Confirm Password"
            placeholder="password"
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter your name";
  }
  if (!emailRegExp.test(formValues.email)) {
    errors.email = "You must enter a valid email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match";
  }

  return errors;
};

RegisterForm = reduxForm({
  form: "registerForm",
  validate: validate,
})(RegisterForm);

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { register, showAlert })(RegisterForm);
