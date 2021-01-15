import React from "react";
import MessageItem from "./MessageItem";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";

class MessageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.length === 0 ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <>
            <MessageForm />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages.data),
    isFetching: state.messages.isFetching,
    errorMessage: state.messages.errorMessage,
  };
};

export default connect(mapStateToProps)(MessageList);
