import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions";

class UserList extends React.Component {
  onDeleteUser = (id) => {
    this.props.deleteUser(id);
  };

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div
          className="card mb-3"
          style={{ maxWidth: "100%" }}
          key={"user" + user._id}
        >
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="form-check" style={{ display: "flex" }}>
              {user.name}
            </div>
            <button
              onClick={() => {
                this.onDeleteUser(user._id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{user.email}</h5>
                <p className="card-text">ROLE: {user.role}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Joined on {new Date(user.createdAt).toLocaleDateString()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>USERS</h1>
        {this.props.users.length === 0 ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <div className="is-loading">
            {this.props.isFetching ? (
              <>
                <div className="is-loading-spinner">
                  <div className="ui active centered inline loader"></div>
                </div>
                <div className="is-loading-background"></div>
              </>
            ) : null}
            {this.renderUsers()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users.data),
    isFetching: state.users.isFetching,
    errorMessage: state.users.errorMessage,
  };
};

export default connect(mapStateToProps, { deleteUser })(UserList);
