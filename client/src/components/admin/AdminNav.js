import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

class AdminNav extends React.Component {
  render() {
    return (
      <div className="list-group">
        <NavLink
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          to="/admin/posts"
          className="list-group-item list-group-item-action"
        >
          Posts
          <span className="badge badge-dark badge-pill">
            {this.props.numPosts}
          </span>
        </NavLink>
        <NavLink
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          to="/admin/users"
          className="list-group-item list-group-item-action"
        >
          Users
          <span className="badge badge-dark badge-pill">
            {this.props.numUsers}
          </span>
        </NavLink>
        <NavLink
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          to="/admin/messages"
          className="list-group-item list-group-item-action"
        >
          Messages
          <span className="badge badge-dark badge-pill">
            {this.props.numMessages}
          </span>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numPosts: Object.values(state.posts.data).length,
    numMessages: Object.values(state.messages.data).length,
    numUsers: Object.values(state.users.data).length,
  };
};

export default connect(mapStateToProps)(AdminNav);
