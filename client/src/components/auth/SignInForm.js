import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { logInUser, showAlert } from "../../actions";
import history from "../../history";

const emailRegExp = new RegExp(
  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
);

class SignInForm extends React.Component {
  renderInput({ input, meta, label, placeholder }) {
    const className = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          {...input}
          type={label.toLowerCase()}
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
    this.props.logInUser(formValues, () => {
      if (this.props.auth.errorMessage !== "") {
        return this.props.showAlert({
          type: "danger",
          content: this.props.auth.errorMessage,
        });
      }
      this.props.showAlert({
        type: "success",
        content: "You've signed in successfully",
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
            name="email"
            component={this.renderInput}
            label="Email"
            placeholder="email@example.com"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Password"
            placeholder="password"
          />
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!emailRegExp.test(formValues.email)) {
    errors.email = "You must enter a valid email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

SignInForm = reduxForm({
  form: "signInForm",
  validate: validate,
})(SignInForm);

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logInUser, showAlert })(SignInForm);
