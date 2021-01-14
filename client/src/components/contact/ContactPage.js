import React from "react";

import Contact from "../contact/Contact";
import ContactBanner from "./ContactBanner";

class ContactPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <ContactBanner />
        <Contact />
      </div>
    );
  }
}

export default ContactPage;
