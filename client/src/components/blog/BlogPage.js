import React from "react";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

import Sidebar from "../Sidebar";
import BlogBanner from "./BlogBanner";
import Contact from "../contact/Contact";
import FeaturedBlog from "./FeaturedBlog";
import RecentBlog from "./RecentBlog";

const sections = [
  { name: "Home", icon: "home" },
  { name: "Featured", icon: "star" },
  { name: "Recent", icon: "calendar" },
  { name: "Contact", icon: "envelope" },
];

class BlogPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Sidebar sections={sections} />
        <Element name="Home" className="element">
          <BlogBanner />
        </Element>
        <Element name="Featured" className="element">
          <FeaturedBlog />
        </Element>
        <Element name="Recent" className="element">
          <RecentBlog />
        </Element>
        <Element name="Contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(BlogPage);
