import React from "react";
import AdminNav from "./AdminNav";
import { Route, Switch } from "react-router-dom";
import PostList from "./PostList";

import { connect } from "react-redux";
import { fetchMessages, fetchPostsAndUsers, fetchUsers } from "../../actions";
import MessageList from "./MessageList";
import UserList from "./UserList";
import PostDetail from "./PostDetail";
import PostCreate from "./PostCreate";

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchUsers();
    this.props.fetchPostsAndUsers();
  }
  render() {
    return (
      <div
        className="container"
        style={{ paddingTop: "8rem", paddingBottom: "12rem" }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminNav />
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path="/admin/posts" exact>
                <PostList />
              </Route>
              <Route path="/admin/posts/new" exact component={PostCreate} />
              <Route path="/admin/posts/:id" exact component={PostDetail} />
              <Route path="/admin/users" exact>
                <UserList />
              </Route>
              <Route path="/admin/messages" exact>
                <MessageList />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  fetchMessages,
  fetchPostsAndUsers,
  fetchUsers,
})(AdminPage);
