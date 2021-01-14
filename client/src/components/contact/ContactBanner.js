import React from "react";
import { Link as ScrollLink } from "react-scroll";

import contactBanner from "../../static/images/contactBanner.jpg";

class ContactBanner extends React.Component {
  render() {
    return (
      <div className="custom-section banner">
        <img className="portfolio-image" src={contactBanner}></img>
        <div className="content">
          <h1 className="display-4">
            <b>CONTACT</b>
          </h1>
          <h5>
            text
            <br />
            text
            <br />
            text
          </h5>
        </div>
      </div>
    );
  }
}

export default ContactBanner;
