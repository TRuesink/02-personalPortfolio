import React from "react";
import { reduxForm, Field } from "redux-form";

class MessageItem extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    const { message } = this.props;
    return (
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header" style={{ display: "flex" }}>
          <div className="form-check">
            <div class="form-check">
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="default"
              ></input>
            </div>
          </div>
          {message.subject}
        </div>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">
                {message.name} - {message.email}
              </h5>
              <p className="card-text">{message.message}</p>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(message.createdAt).toLocaleDateString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "messageForm",
})(MessageItem);
