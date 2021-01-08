import React from "react";
import LandingPage from "./landingPage/LandingPage";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import Header from "./Header";
import Footer from "./Footer";
import AdminPage from "./admin/AdminPage";
import BlogPage from "./blog/BlogPage";
import ProjectPage from "./projects/ProjectPage";

class App extends React.Component {
  render() {
    return (
      <div className="body-bg">
        <Router history={history}>
          <Header />

          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/blog" exact component={BlogPage} />
              <Route path="/projects" exact component={ProjectPage} />
              <Route path="/admin" exact component={AdminPage} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
