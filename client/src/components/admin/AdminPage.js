import React from "react";
import AdminNav from "./AdminNav";
import { Route, Switch } from "react-router-dom";
import PostList from "./PostList";

import { connect } from "react-redux";
import { fetchMessages, fetchPosts, fetchUsers } from "../../actions";
import MessageList from "./MessageList";
import UserList from "./UserList";
import PostDetail from "./PostDetail";
import PostCreate from "./PostCreate";
import AdminCommentList from "./AdminCommentList";
import PostCommentList from "./PostCommentList";

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchUsers();
    this.props.fetchPosts();
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
              <Route
                path="/admin/comments"
                exact
                component={AdminCommentList}
              />
              <Route
                path="/admin/comments/:id"
                exact
                component={PostCommentList}
              />
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
  fetchPosts,
  fetchUsers,
})(AdminPage);
