import React from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { updateMessage, fetchMessages, deleteMessage } from "../../actions";

class MessageForm extends React.Component {
  componentDidMount() {}
  onClickMessage = (id, value) => {
    this.props.updateMessage(id, value);
  };
  onDeleteMessage = (id) => {
    this.props.deleteMessage(id);
  };
  renderMessages() {
    console.log(this.props.testing);
    return this.props.messages.map((message) => {
      const cardClass = message.read ? "border-success" : "border-danger";
      return (
        <div className={`card mb-3 ${cardClass}`} style={{ maxWidth: "100%" }}>
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="form-check" style={{ display: "flex" }}>
              <div>
                <Field
                  onClick={() =>
                    this.onClickMessage(message._id, !message.read)
                  }
                  name={message._id}
                  class="form-check-input position-static"
                  type="checkbox"
                  id={message._id}
                  component="input"
                ></Field>
              </div>
              {message.subject}
            </div>
            <button
              onClick={() => {
                this.onDeleteMessage(message._id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
          <div className="row no-gutters">
            <div className="col">
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
    });
  }
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    return (
      <div>
        <h1>MESSAGES</h1>
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
            {this.renderMessages()}
          </form>
        </div>
      </div>
    );
  }
}

MessageForm = reduxForm({
  form: "messageForm",
})(MessageForm);

const selector = formValueSelector("messageForm");
const mapStateToProps = (state) => {
  let initialValues = { editing: false };
  Object.values(state.messages.data).forEach((message) => {
    return (initialValues[message._id] = message.read);
  });
  return {
    messages: Object.values(state.messages.data),
    isFetching: state.messages.isFetching,
    editing: selector(state, "editing"),
    testing: selector(state, ...Object.keys(state.messages.data)),
    initialValues: initialValues,
  };
};

export default connect(mapStateToProps, {
  updateMessage,
  fetchMessages,
  deleteMessage,
})(MessageForm);
