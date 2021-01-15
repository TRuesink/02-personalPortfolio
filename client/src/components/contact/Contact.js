import React from "react";
import ContactForm from "./ContactForm";
import { createMessage } from "../../actions";
import { connect } from "react-redux";

class Contact extends React.Component {
  onSubmit = (formValues) => {
    this.props.createMessage(formValues);
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }} className="custom-section">
        <div className="resume-section">
          <h1 className="title">CONTACT</h1>

          <div className="content">
            <div className="contact-info">
              <div style={{ padding: "2rem" }}>
                <h3>
                  <i className="mail icon"></i>Email:
                </h3>
                <h5 className="text-primary">timothy.ruesink@gmail.com</h5>
              </div>
              <div style={{ padding: "2rem" }}>
                <h3>
                  <i className="phone icon"></i>Call:
                </h3>
                <h5 className="text-primary">(608) 327-9816</h5>
              </div>
            </div>
            <div className="contact-form-container">
              <ContactForm onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createMessage })(Contact);
