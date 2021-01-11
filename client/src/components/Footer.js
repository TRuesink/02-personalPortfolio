import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="footer"
        style={{ height: "40vh", backgroundColor: "#e9ecef" }}
      >
        <h1>Tim Ruesink</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p>
          &#169; Copyright <b>timruesink.com</b>{" "}
        </p>
        <p>
          Created using the MERN stack by: <b>Tim Ruesink</b>
        </p>
      </div>
    );
  }
}

export default Footer;
