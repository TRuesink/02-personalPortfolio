import React from "react";
import { Field, reduxForm } from "redux-form";

class SignInForm extends React.Component {
  renderInput({ input, meta, label, placeholder }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          {...input}
          type={label.toLowerCase()}
          className="form-control"
          placeholder={placeholder}
        ></input>
      </div>
    );
  }

  render() {
    return (
      <form className="px-4 py-3">
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
    );
  }
}

export default reduxForm({
  form: "signInForm",
})(SignInForm);
