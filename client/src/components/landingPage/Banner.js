import React from "react";
import bannerPhoto from "../../static/images/portfolio_banner1.jpg";
import { Link as ScrollLink } from "react-scroll";

class Banner extends React.Component {
  render() {
    return (
      <div className="custom-section banner">
        <img
          className="portfolio-image"
          src={bannerPhoto}
          alt="portfolioImage"
        ></img>
        <div className="content">
          <h1 className="display-4">
            <b>TIM RUESINK</b>
          </h1>
          <h5>
            <ScrollLink
              className="scroll-link"
              to="Education"
              spy={true}
              smooth={true}
              duration={500}
            >
              Mechanical Engineer
            </ScrollLink>{" "}
            by Training.
            <br />{" "}
            <ScrollLink
              className="scroll-link"
              to="Experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              Technical Sales
            </ScrollLink>{" "}
            by Trade.
            <br />{" "}
            <ScrollLink
              className="scroll-link"
              to="Portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              Sotware Developer
            </ScrollLink>{" "}
            by Passion.
          </h5>
        </div>
      </div>
    );
  }
}

export default Banner;
