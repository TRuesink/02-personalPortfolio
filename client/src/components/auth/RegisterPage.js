import React from "react";
import RegisterForm from "./RegisterForm";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="custom-section">
        <div className="resume-section">
          <h1 className="title" style={{ paddingTop: "4rem" }}>
            REGISTER
          </h1>
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
