import React from "react";
import AdminNav from "./AdminNav";
import { Route } from "react-router-dom";
import PostList from "./PostList";

import { connect } from "react-redux";
import { fetchMessages, fetchPostsAndUsers } from "../../actions";
import MessageList from "./MessageList";

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchPostsAndUsers();
  }
  render() {
    return (
      <div
        className="container"
        style={{ paddingTop: "8rem", paddingBottom: "12rem" }}
      >
        <div className="row">
          <div className="col">
            <AdminNav />
          </div>
          <div className="col-9">
            <Route path="/admin/posts" exact>
              <PostList />
            </Route>
            <Route path="/admin/messages" exact>
              <MessageList />
            </Route>
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

export default connect(mapStateToProps, { fetchMessages, fetchPostsAndUsers })(
  AdminPage
);
