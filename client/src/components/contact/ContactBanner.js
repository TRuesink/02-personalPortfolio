import React from "react";

import contactBanner from "../../static/images/contactBanner.jpg";

class ContactBanner extends React.Component {
  render() {
    return (
      <div className="custom-section banner">
        <img
          className="portfolio-image"
          src={contactBanner}
          alt="contactBanner"
        ></img>
        <div className="content">
          <h1 className="display-4">
            <b>CONTACT</b>
          </h1>
          <h5>
            Send me a text.
            <br />
            Give me a call.
            <br />
            Shoot me an email.
          </h5>
        </div>
      </div>
    );
  }
}

export default ContactBanner;
