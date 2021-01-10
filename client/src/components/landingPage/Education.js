import React from "react";
import wiLogo from "../../static/images/wiLogo.jpg";
import wmuLogo from "../../static/images/wmuLogo.jpg";

import { connect } from "react-redux";
import { fetchEducation } from "../../actions";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Education extends React.Component {
  componentDidMount() {
    this.props.fetchEducation();
  }

  renderSchools() {
    return this.props.schools.map((school) => {
      const startDate = new Date(school.startDate);
      const endDate = new Date(school.endDate);
      return (
        <div className="custom-card">
          <img src={`/api/v1/photos/static/${school.photo}`}></img>
          <div className="info">
            <div className="header">
              <h4 className="job-title">
                {school.degree + " " + school.field}
              </h4>
              <h4 className="company">{school.school}</h4>
            </div>
            <p className="font-italic">
              {`${months[startDate.getMonth()]} ${startDate.getFullYear()}`} -{" "}
              {`${months[endDate.getMonth()]} ${endDate.getFullYear()}`}
            </p>
            {!school.honors ? (
              <p>GPA: {school.gpa}</p>
            ) : (
              <p>Honors: {school.honors}</p>
            )}
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }} className="custom-section">
        <div className="resume-section">
          <h1 className="title">EDUCATION</h1>
          {this.props.isFetching || this.props.schools.length === 0 ? (
            <div class="ui active centered inline loader"></div>
          ) : (
            <div className="content-column">{this.renderSchools()}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: Object.values(state.schools.data),
    isFetching: state.schools.isFetching,
    errorMessage: state.schools.errorMessage,
  };
};

export default connect(mapStateToProps, { fetchEducation })(Education);
