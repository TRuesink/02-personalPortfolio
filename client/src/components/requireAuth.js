import React from "react";
import { connect } from "react-redux";
import history from "../history";
import { getMe, showAlert } from "../actions";

export default (ChildComponent) => {
  class ComposedComponent extends React.Component {
    // Our component just got rendered
    componentDidMount() {
      this.props.getMe();
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      const role = this.props.auth.user.role;
      console.log(role);
      if (role !== "admin" && role !== "pending" && role !== "init") {
        history.push("/");
        this.props.showAlert({
          type: "danger",
          content: "You are not authorized to access this page",
        });
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { auth: state.auth };
  }
  return connect(mapStateToProps, { getMe, showAlert })(ComposedComponent);
};
