import React from "react";
import LandingPage from "./landingPage/LandingPage";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import Header from "./Header";
import Footer from "./Footer";
import AdminPage from "./admin/AdminPage";
import BlogPage from "./blog/BlogPage";
import ProjectPage from "./projects/ProjectPage";

import { connect } from "react-redux";
import { dismissAlert } from "../actions";
import { Alert } from "react-bootstrap";
import ContactPage from "./contact/ContactPage";

class App extends React.Component {
  renderAlert() {
    if (this.props.alert.active) {
      return (
        <Alert
          variant={this.props.alert.message.type}
          onClose={() => this.props.dismissAlert()}
          dismissible
        >
          <Alert.Heading>{this.props.alert.message.type}</Alert.Heading>
          <p>{this.props.alert.message.content}</p>
        </Alert>
      );
    }
  }

  render() {
    return (
      <div className="body-bg">
        <div className="custom-alert">{this.renderAlert()}</div>
        <Router history={history}>
          <Header />
          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/blog" exact component={BlogPage} />
              <Route path="/projects" exact component={ProjectPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="/admin" exact component={AdminPage} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps, { dismissAlert })(App);
